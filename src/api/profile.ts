import { Hono } from 'hono'
import { getSupabaseFromContext } from '../lib/supabase'
import { getCookie } from 'hono/cookie'

export const profile = new Hono()

profile.post('/update', async (c) => {
  const supabase = getSupabaseFromContext(c)
  const token = getCookie(c, 'sb-access-token')
  
  if (!token) {
    return c.redirect('/login?error=unauthorized')
  }

  const { data: { user }, error: authError } = await supabase.auth.getUser(token)
  
  if (authError || !user) {
    return c.redirect('/login?error=unauthorized')
  }

  const body = await c.req.parseBody()
  const { full_name, phone } = body

  // Update profiles table
  const { error } = await supabase
    .from('profiles')
    .update({ 
      full_name: full_name || user.user_metadata?.full_name,
      phone: phone || null
    })
    .eq('id', user.id)

  if (error) {
    return c.redirect('/profile?error=' + encodeURIComponent(error.message))
  }

  return c.redirect('/profile?success=1')
})
