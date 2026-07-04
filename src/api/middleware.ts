import { Context, Next } from 'hono'
import { getCookie } from 'hono/cookie'
import { getSupabaseFromContext, createSupabaseAuth, Env } from '../lib/supabase'

/**
 * Authentication middleware — verifies user is logged in.
 * Extracts JWT from Bearer token or cookie, validates with Supabase,
 * and sets user info in context.
 */
export const authMiddleware = async (c: Context, next: Next) => {
  const authHeader = c.req.header('Authorization')
  const bearerToken = authHeader?.toLowerCase().startsWith('bearer ')
    ? authHeader.slice(7).trim()
    : undefined
  const cookieToken = getCookie(c, 'sb-access-token')
  const token = bearerToken || cookieToken

  if (!token) {
    return c.json({ error: 'غير مصرّح: يرجى تسجيل الدخول أولاً' }, 401)
  }

  try {
    const supabase = createSupabaseAuth(c.env as Env, token)
    const { data: { user }, error } = await supabase.auth.getUser(token)

    if (error || !user) {
      return c.json({ error: 'جلسة غير صالحة: يرجى إعادة تسجيل الدخول' }, 401)
    }

    // Set user info in context
    c.set('user', user)
    c.set('token', token)
    await next()
  } catch (err) {
    return c.json({ error: 'خطأ في التحقق من الهوية' }, 500)
  }
}

/**
 * Admin middleware — verifies user is an admin.
 * Must be used AFTER authMiddleware.
 */
export const adminMiddleware = async (c: Context, next: Next) => {
  const token = c.get('token') || getCookie(c, 'sb-access-token')

  if (!token) {
    return c.json({ error: 'غير مصرّح: يرجى تسجيل الدخول أولاً' }, 401)
  }

  try {
    const supabase = createSupabaseAuth(c.env as Env, token)
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)

    if (authError || !user) {
      return c.json({ error: 'جلسة غير صالحة' }, 401)
    }

    // Check admin role from profiles table
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile?.role !== 'admin') {
      return c.json({ error: 'ليس لديك صلاحية للقيام بهذا الإجراء' }, 403)
    }

    c.set('user', user)
    c.set('token', token)
    await next()
  } catch (err) {
    return c.json({ error: 'خطأ في التحقق من الصلاحيات' }, 500)
  }
}

/**
 * Admin guard for HTML pages — redirects to login if not admin.
 */
export const adminPageGuard = async (c: Context, next: Next) => {
  const token = getCookie(c, 'sb-access-token')

  if (!token) {
    return c.redirect('/login?error=unauthorized')
  }

  try {
    const supabase = createSupabaseAuth(c.env as Env, token)
    const { data: { user }, error } = await supabase.auth.getUser(token)

    if (error || !user) {
      return c.redirect('/login?error=unauthorized')
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile?.role !== 'admin') {
      return c.redirect('/')
    }

    c.set('user', user)
    c.set('token', token)
    await next()
  } catch (err) {
    return c.redirect('/login?error=unauthorized')
  }
}

/**
 * Simple in-memory rate limiter.
 * Tracks requests per IP with a sliding window.
 */
const rateLimitMap = new Map<string, { count: number; reset: number }>()

export const rateLimiter = (maxRequests: number = 30, windowMs: number = 60000) => {
  return async (c: Context, next: Next) => {
    const ip = c.req.header('CF-Connecting-IP') || c.req.header('X-Forwarded-For') || 'unknown'
    const now = Date.now()
    const entry = rateLimitMap.get(ip)

    if (entry && now < entry.reset) {
      entry.count++
      if (entry.count > maxRequests) {
        return c.json({ error: 'عدد كبير من الطلبات. يرجى الانتظار.' }, 429)
      }
    } else {
      rateLimitMap.set(ip, { count: 1, reset: now + windowMs })
    }

    // Cleanup old entries periodically
    if (rateLimitMap.size > 10000) {
      for (const [key, val] of rateLimitMap) {
        if (now > val.reset) rateLimitMap.delete(key)
      }
    }

    await next()
  }
}

/**
 * Validate request body against a schema.
 * Schema is an object where keys are field names and values are validation rules.
 */
export type ValidationRule = {
  required?: boolean
  type?: 'string' | 'number' | 'boolean' | 'email'
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  pattern?: RegExp
  message?: string
}

export type ValidationSchema = Record<string, ValidationRule>

export const validateBody = (schema: ValidationSchema) => {
  return async (c: Context, next: Next) => {
    let body: any
    const contentType = c.req.header('content-type') || ''

    try {
      if (contentType.includes('application/json')) {
        body = await c.req.json()
      } else {
        body = await c.req.parseBody()
      }
    } catch (err) {
      return c.json({ error: 'بيانات الطلب غير صالحة' }, 400)
    }

    const errors: string[] = []

    for (const [field, rules] of Object.entries(schema)) {
      const value = body[field]

      if (rules.required && (!value || (typeof value === 'string' && !value.trim()))) {
        errors.push(rules.message || `الحقل "${field}" مطلوب`)
        continue
      }

      if (value !== undefined && value !== null && value !== '') {
        if (rules.type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(String(value))) {
            errors.push(`البريد الإلكتروني غير صالح`)
          }
        }

        if (rules.type === 'number') {
          const num = Number(value)
          if (isNaN(num)) {
            errors.push(`الحقل "${field}" يجب أن يكون رقمًا`)
          } else {
            if (rules.min !== undefined && num < rules.min) {
              errors.push(`الحقل "${field}" يجب أن يكون ${rules.min} على الأقل`)
            }
            if (rules.max !== undefined && num > rules.max) {
              errors.push(`الحقل "${field}" يجب ألا يتجاوز ${rules.max}`)
            }
          }
        }

        if (rules.type === 'string' || !rules.type) {
          const str = String(value)
          if (rules.minLength && str.length < rules.minLength) {
            errors.push(`الحقل "${field}" يجب أن يكون ${rules.minLength} حروف على الأقل`)
          }
          if (rules.maxLength && str.length > rules.maxLength) {
            errors.push(`الحقل "${field}" يجب ألا يتجاوز ${rules.maxLength} حرف`)
          }
          if (rules.pattern && !rules.pattern.test(str)) {
            errors.push(rules.message || `الحقل "${field}" بصيغة غير صالحة`)
          }
        }
      }
    }

    if (errors.length > 0) {
      return c.json({ error: errors[0], errors }, 400)
    }

    c.set('validatedBody', body)
    await next()
  }
}
