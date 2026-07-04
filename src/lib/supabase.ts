import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { getCookie } from 'hono/cookie'

export type Env = {
  SUPABASE_URL: string
  SUPABASE_KEY: string
  SUPABASE_SERVICE_ROLE_KEY?: string
}

/**
 * Public client — uses anon key, respects RLS.
 * Use for unauthenticated / public read operations.
 */
export const createSupabase = (env: Env): SupabaseClient => {
  return createClient(env.SUPABASE_URL, env.SUPABASE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

/**
 * Admin client — uses service_role key, BYPASSES RLS.
 * Use only for trusted server-side admin operations.
 * Falls back to anon key if service_role not configured.
 */
export const createSupabaseAdmin = (env: Env): SupabaseClient => {
  const key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_KEY
  return createClient(env.SUPABASE_URL, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  })
}

/**
 * Authenticated client — uses anon key + user's JWT in Authorization header.
 * This makes RLS policies based on auth.uid() work correctly.
 */
export const createSupabaseAuth = (env: Env, accessToken: string): SupabaseClient => {
  return createClient(env.SUPABASE_URL, env.SUPABASE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  })
}

/**
 * Legacy helper — kept for backwards compatibility.
 * Creates a client with optional access token.
 */
export const getSupabase = (env: Env, accessToken?: string): SupabaseClient => {
  if (accessToken) {
    return createSupabaseAuth(env, accessToken)
  }
  return createSupabase(env)
}

/**
 * Helper to get supabase client from Hono context.
 * Extracts JWT from Authorization header or cookie and
 * creates an appropriately authenticated client.
 */
export const getSupabaseFromContext = (c: any): SupabaseClient => {
  const authHeader = c.req.header('Authorization')
  const bearerToken = authHeader?.toLowerCase().startsWith('bearer ')
    ? authHeader.slice(7).trim()
    : undefined
  const cookieToken = getCookie(c, 'sb-access-token')
  const token = bearerToken || cookieToken

  return getSupabase(c.env, token)
}

/**
 * Helper to get an admin supabase client from Hono context.
 */
export const getSupabaseAdminFromContext = (c: any): SupabaseClient => {
  return createSupabaseAdmin(c.env)
}
