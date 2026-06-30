import { Hono } from 'hono'
import { getSupabaseFromContext } from '../lib/supabase'

export const auth = new Hono()

auth.post('/register', async (c) => {
  const supabase = getSupabaseFromContext(c)
  const body = await c.req.json()
  const { email, password, fullName, phone } = body

  if (!email || !password || !fullName) {
    return c.json({ error: 'Missing required fields' }, 400)
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        phone: phone || '',
      }
    }
  })

  if (error) return c.json({ error: error.message }, 400)

  // Assuming we need to manually insert into profiles due to RLS, or Supabase trigger handles it.
  // It is best practice to have a trigger in Supabase on auth.users to create the profile,
  // but if we don't, we can do it here. Let's do it here just in case.
  if (data.user) {
    await supabase.from('profiles').insert({
      id: data.user.id,
      full_name: fullName,
      phone: phone || '',
      role: 'donor'
    })
  }

  return c.json({ data })
})

auth.post('/login', async (c) => {
  const supabase = getSupabaseFromContext(c)
  const body = await c.req.json()
  const { email, password } = body

  if (!email || !password) {
    return c.json({ error: 'Missing email or password' }, 400)
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) return c.json({ error: error.message }, 400)
  
  return c.json({ data })
})

auth.post('/logout', async (c) => {
  const supabase = getSupabaseFromContext(c)
  const authHeader = c.req.header('Authorization')
  
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '')
    await supabase.auth.admin.signOut(token)
  }
  
  return c.json({ message: 'Logged out successfully' })
})
