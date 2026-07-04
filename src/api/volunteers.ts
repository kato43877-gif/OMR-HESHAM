import { Hono } from 'hono'
import { getSupabaseFromContext, getSupabaseAdminFromContext } from '../lib/supabase'
import { getCookie } from 'hono/cookie'
import { adminMiddleware, authMiddleware } from './middleware'

export const volunteers = new Hono()

// Submit a volunteer application (accepts form data from browser)
volunteers.post('/', async (c) => {
  const supabase = getSupabaseAdminFromContext(c) // Use admin context to insert public applications securely

  // Get user from cookie if logged in
  let profile_id = null
  const token = getCookie(c, 'sb-access-token')
  if (token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]))
      profile_id = payload.sub
    } catch(e) {}
  }

  // Accept both JSON and form data
  const contentType = c.req.header('content-type') || ''
  let body: any
  if (contentType.includes('application/json')) {
    body = await c.req.json()
  } else {
    body = await c.req.parseBody()
  }

  const { full_name, age, phone, city, preferred_role, skills } = body

  if (!full_name || !phone) {
    if (!contentType.includes('application/json')) {
      return c.redirect('/volunteers?error=missing_fields')
    }
    return c.json({ error: 'الاسم ورقم الهاتف مطلوبان' }, 400)
  }

  const { error } = await supabase
    .from('volunteers')
    .insert([{
      profile_id,
      full_name,
      age: age ? parseInt(age as string) : null,
      phone,
      city,
      preferred_role,
      skills,
      status: 'pending'
    }])

  // If form submission, redirect back
  if (!contentType.includes('application/json')) {
    if (error) return c.redirect('/volunteers?error=' + encodeURIComponent(error.message))
    return c.redirect('/volunteers?success=1#volForm')
  }

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ message: 'تم إرسال طلب التطوع بنجاح.' })
})

// Get my volunteer applications (Requires Auth)
volunteers.get('/my', authMiddleware, async (c) => {
  const user = (c as any).get('user')
  const supabase = getSupabaseAdminFromContext(c)

  const { data, error } = await supabase
    .from('volunteers')
    .select('*')
    .eq('profile_id', user.id)
    .order('created_at', { ascending: false })

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ data })
})

// Update status (Admin only)
volunteers.post('/status/:id', adminMiddleware, async (c) => {
  const supabase = getSupabaseAdminFromContext(c)
  const id = c.req.param('id')
  const body = await c.req.parseBody()
  
  const { error } = await supabase
    .from('volunteers')
    .update({ status: body.status })
    .eq('id', id)

  if (error) return c.redirect('/dashboard/volunteers?error=1')
  return c.redirect('/dashboard/volunteers?success=1')
})
