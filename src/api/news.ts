import { Hono } from 'hono'
import { getSupabaseFromContext } from '../lib/supabase'

export const news = new Hono()

// Get all news
news.get('/', async (c) => {
  const supabase = getSupabaseFromContext(c)
  
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .order('publish_date', { ascending: false })

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ data })
})

// Get single news
news.get('/:id', async (c) => {
  const supabase = getSupabaseFromContext(c)
  const id = c.req.param('id')
  
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return c.json({ error: error.message }, 400)
  return c.json({ data })
})
