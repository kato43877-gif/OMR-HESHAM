import { Hono } from 'hono'
import { getSupabaseFromContext } from '../lib/supabase'

export const volunteers = new Hono()

// Submit a volunteer application
volunteers.post('/', async (c) => {
  const supabase = getSupabaseFromContext(c)
  
  // Set user context if logged in
  const authHeader = c.req.header('Authorization')
  let profile_id = null
  
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '')
    const { data: { user } } = await supabase.auth.getUser(token)
    if (user) {
      profile_id = user.id
    }
  }

  const body = await c.req.json()
  const { full_name, age, phone, city, preferred_role, skills } = body

  if (!full_name || !phone) {
    return c.json({ error: 'Missing required fields' }, 400)
  }

  const { data, error } = await supabase
    .from('volunteers')
    .insert([{
      profile_id,
      full_name,
      age,
      phone,
      city,
      preferred_role,
      skills,
      status: 'pending'
    }])
    .select()
    .single()

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ data, message: 'Application submitted successfully.' })
})

// Get my volunteer applications (Requires Auth)
volunteers.get('/my', async (c) => {
  const supabase = getSupabaseFromContext(c)
  
  const authHeader = c.req.header('Authorization')
  if (!authHeader) return c.json({ error: 'Unauthorized' }, 401)
    
  const token = authHeader.replace('Bearer ', '')
  await supabase.auth.setSession({ access_token: token, refresh_token: '' })

  const { data, error } = await supabase
    .from('volunteers')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ data })
})
