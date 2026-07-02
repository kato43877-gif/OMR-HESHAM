import { Hono } from 'hono'
import { getSupabaseFromContext } from '../lib/supabase'

export const auth = new Hono()

auth.get('/google', async (c) => {
  const supabase = getSupabaseFromContext(c)
  
  // Create a redirect URL that points to our callback route
  const redirectUrl = new URL('/api/auth/callback', new URL(c.req.url).origin).href

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectUrl
    }
  })

  if (error || !data.url) {
    console.error('Google OAuth error:', error?.message)
    return c.redirect('/login?error=oauth_failed')
  }

  // Redirect the user to Google's consent screen
  return c.redirect(data.url)
})

auth.get('/callback', async (c) => {
  // Since we are using standard supabase-js without an SSR package setup for cookies,
  // the callback will actually be handled by Supabase and the hash fragment will 
  // be sent to the browser. However, for a simple implementation, if the code 
  // query param exists, we can try to exchange it. 
  // In typical Supabase setups without SSR, we just redirect to the dashboard.
  return c.redirect('/dashboard')
})

auth.get('/logout', async (c) => {
  // Since session is managed client-side or implicitly in this setup,
  // we just redirect to the home page or login page
  return c.redirect('/login')
})
