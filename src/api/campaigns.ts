import { Hono } from 'hono'
import { getSupabaseFromContext } from '../lib/supabase'

export const campaigns = new Hono()

// Get all campaigns
campaigns.get('/', async (c) => {
  const supabase = getSupabaseFromContext(c)
  
  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ data })
})

// Get single campaign
campaigns.get('/:id', async (c) => {
  const supabase = getSupabaseFromContext(c)
  const id = c.req.param('id')
  
  const { data, error } = await supabase
    .from('campaigns')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ data })
})

// Create campaign (Admin only - requires proper RLS or checking token in Supabase client)
campaigns.post('/', async (c) => {
  const supabase = getSupabaseFromContext(c)
  
  // To act on behalf of the user, we need to pass their auth token to supabase client
  const authHeader = c.req.header('Authorization')
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '')
    await supabase.auth.setSession({ access_token: token, refresh_token: '' })
  } else {
    return c.json({ error: 'Unauthorized' }, 401)
  }

  const body = await c.req.json()
  
  const { data, error } = await supabase
    .from('campaigns')
    .insert([body])
    .select()
    .single()

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ data })
})
