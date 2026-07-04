import { Hono } from 'hono'
import { getSupabaseAdminFromContext } from '../lib/supabase'
import { authMiddleware } from './middleware'

export const profile = new Hono()

// Update profile information (Requires Auth)
profile.post('/update', authMiddleware, async (c) => {
  const supabase = getSupabaseAdminFromContext(c)
  const user = (c as any).get('user')

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
