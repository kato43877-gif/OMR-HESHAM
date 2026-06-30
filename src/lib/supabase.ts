import { createClient } from '@supabase/supabase-js'

export type Env = {
  SUPABASE_URL: string
  SUPABASE_KEY: string
}

export const getSupabase = (env: Env) => {
  return createClient(env.SUPABASE_URL, env.SUPABASE_KEY)
}

// Helper to get supabase client from Hono context
export const getSupabaseFromContext = (c: any) => {
  return getSupabase(c.env)
}
