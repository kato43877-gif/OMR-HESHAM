import { Hono } from 'hono'
import { getSupabaseFromContext } from '../lib/supabase'

export const contacts = new Hono()

// Submit a contact message
contacts.post('/', async (c) => {
  const supabase = getSupabaseFromContext(c)
  
  const body = await c.req.json()
  const { name, email, phone, subject, message } = body

  if (!name || !email || !message) {
    return c.json({ error: 'Missing required fields' }, 400)
  }

  const { data, error } = await supabase
    .from('contacts')
    .insert([{
      name,
      email,
      phone,
      subject,
      message,
      status: 'unread'
    }])
    .select()
    .single()

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ data, message: 'Message sent successfully.' })
})
