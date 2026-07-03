import { createClient } from '@supabase/supabase-js'
import { getCookie } from 'hono/cookie'

export type Env = {
  SUPABASE_URL: string
  SUPABASE_KEY: string
}

export const getSupabase = (env: Env, accessToken?: string) => {
  return createClient(env.SUPABASE_URL, env.SUPABASE_KEY, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    ...(accessToken
      ? {
          global: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        }
      : {}),
  })
}

// Helper to get supabase client from Hono context
export const getSupabaseFromContext = (c: any) => {
  const authHeader = c.req.header('Authorization')
  const bearerToken = authHeader?.toLowerCase().startsWith('bearer ')
    ? authHeader.slice(7).trim()
    : undefined
  const cookieToken = getCookie(c, 'sb-access-token')

  return getSupabase(c.env, bearerToken || cookieToken)
}
