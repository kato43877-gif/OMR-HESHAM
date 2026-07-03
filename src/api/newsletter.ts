import { Hono } from 'hono'
import { getSupabaseFromContext } from '../lib/supabase'

export const newsletter = new Hono()

// Subscribe to newsletter (accepts form data from browser)
newsletter.post('/', async (c) => {
  const supabase = getSupabaseFromContext(c)

  // Accept both JSON and form data
  const contentType = c.req.header('content-type') || ''
  let body: any
  if (contentType.includes('application/json')) {
    body = await c.req.json()
  } else {
    body = await c.req.parseBody()
  }

  const { email } = body

  if (!email) {
    if (!contentType.includes('application/json')) {
      const referer = c.req.header('referer') || '/'
      return c.redirect(referer)
    }
    return c.json({ error: 'Email is required' }, 400)
  }

  const { error } = await supabase
    .from('newsletter_subscribers')
    .upsert([{ email, status: 'subscribed' }], { onConflict: 'email' })

  // If form submission, redirect back to referer
  if (!contentType.includes('application/json')) {
    const referer = c.req.header('referer') || '/'
    const separator = referer.includes('?') ? '&' : '?'
    if (error) {
      console.error('Newsletter subscription error:', error.message)
      return c.redirect(referer + separator + 'news_error=1')
    }
    return c.redirect(referer + separator + 'news_success=1')
  }

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ message: 'Subscribed successfully.' })
})
