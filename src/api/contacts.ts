import { Hono } from 'hono'
import { getSupabaseAdminFromContext } from '../lib/supabase'
import { adminMiddleware } from './middleware'

export const contacts = new Hono()

// Submit a contact message (accepts form data from browser)
contacts.post('/', async (c) => {
  const supabase = getSupabaseAdminFromContext(c)

  // Accept both JSON and form data
  const contentType = c.req.header('content-type') || ''
  let body: any
  if (contentType.includes('application/json')) {
    body = await c.req.json()
  } else {
    body = await c.req.parseBody()
  }

  const { name, email, phone, subject, message } = body

  if (!name || !email || !message) {
    if (!contentType.includes('application/json')) {
      return c.redirect('/contact?error=missing_fields')
    }
    return c.json({ error: 'الرجاء ملء جميع الحقول المطلوبة' }, 400)
  }

  const { error } = await supabase
    .from('contacts')
    .insert([{
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
      status: 'unread'
    }])

  // If form submission, redirect back
  if (!contentType.includes('application/json')) {
    if (error) return c.redirect('/contact?error=' + encodeURIComponent(error.message))
    return c.redirect('/contact?success=1')
  }

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ message: 'تم إرسال رسالتك بنجاح.' })
})

// Update status (Admin only)
contacts.post('/status/:id', adminMiddleware, async (c) => {
  const supabase = getSupabaseAdminFromContext(c)
  const id = c.req.param('id')
  const body = await c.req.parseBody()
  
  const { error } = await supabase
    .from('contacts')
    .update({ status: body.status })
    .eq('id', id)

  if (error) return c.redirect('/dashboard/contacts?error=1')
  return c.redirect('/dashboard/contacts?success=1')
})
