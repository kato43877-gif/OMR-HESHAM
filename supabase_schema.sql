-- Supabase Schema for Omar Hesham Foundation

-- Users / Profiles (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  phone text,
  role text DEFAULT 'donor', -- 'donor', 'volunteer', 'admin'
  avatar_url text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Campaigns
CREATE TABLE public.campaigns (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  category text, -- 'صحة', 'غذاء', 'تعليم', etc.
  is_urgent boolean DEFAULT false,
  raised numeric DEFAULT 0,
  goal numeric NOT NULL,
  description text,
  image_url text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Donations
CREATE TABLE public.donations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL, -- Null if guest donation
  campaign_id uuid REFERENCES public.campaigns(id) ON DELETE SET NULL, -- Null for general fund
  amount numeric NOT NULL,
  donation_type text, -- 'once', 'monthly'
  status text DEFAULT 'pending', -- 'pending', 'completed', 'failed'
  donor_name text NOT NULL,
  donor_phone text NOT NULL,
  donor_email text,
  payment_method text, -- 'card', 'transfer', 'wallet'
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Volunteers Applications
CREATE TABLE public.volunteers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  profile_id uuid REFERENCES public.profiles(id) ON DELETE SET NULL,
  full_name text NOT NULL,
  age integer,
  phone text NOT NULL,
  city text,
  preferred_role text,
  skills text,
  status text DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Contact Messages
CREATE TABLE public.contacts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'unread', -- 'unread', 'read', 'replied'
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- News
CREATE TABLE public.news (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  category text,
  excerpt text,
  content text,
  image_url text,
  publish_date date DEFAULT CURRENT_DATE,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Events
CREATE TABLE public.events (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  type text,
  place text,
  event_date timestamp with time zone,
  description text,
  image_url text,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Success Stories
CREATE TABLE public.stories (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  role text,
  content text NOT NULL,
  rating integer DEFAULT 5,
  image_url text,
  campaign_id uuid REFERENCES public.campaigns(id) ON DELETE SET NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Jobs (Careers)
CREATE TABLE public.jobs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  location text,
  job_type text, -- 'دوام كامل', 'دوام جزئي', etc.
  department text,
  description text,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Job Applications
CREATE TABLE public.job_applications (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id uuid REFERENCES public.jobs(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  bio text,
  cv_url text,
  status text DEFAULT 'pending', -- 'pending', 'reviewed', 'accepted', 'rejected'
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Newsletter Subscribers
CREATE TABLE public.newsletter_subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  status text DEFAULT 'active',
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Row Level Security) on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Campaigns are viewable by everyone" ON public.campaigns FOR SELECT USING (true);
CREATE POLICY "News are viewable by everyone" ON public.news FOR SELECT USING (true);
CREATE POLICY "Events are viewable by everyone" ON public.events FOR SELECT USING (true);
CREATE POLICY "Stories are viewable by everyone" ON public.stories FOR SELECT USING (true);
CREATE POLICY "Jobs are viewable by everyone" ON public.jobs FOR SELECT USING (true);

-- Authenticated Users Policies (Donations)
CREATE POLICY "Users can insert their own donations or guests" ON public.donations FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view own donations" ON public.donations FOR SELECT USING (auth.uid() = profile_id);

-- Volunteer applications
CREATE POLICY "Anyone can submit volunteer application" ON public.volunteers FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can view own volunteer applications" ON public.volunteers FOR SELECT USING (auth.uid() = profile_id);

-- Contact submissions
CREATE POLICY "Anyone can submit a contact message" ON public.contacts FOR INSERT WITH CHECK (true);

-- Job applications
CREATE POLICY "Anyone can submit job applications" ON public.job_applications FOR INSERT WITH CHECK (true);

-- Newsletter
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);

-- Admin Policies
-- Admins can do everything on all tables. This requires a helper function or direct role check.
CREATE OR REPLACE FUNCTION public.is_admin() RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Add admin ALL privileges to tables
CREATE POLICY "Admins can manage campaigns" ON public.campaigns FOR ALL USING (public.is_admin());
CREATE POLICY "Admins can manage donations" ON public.donations FOR ALL USING (public.is_admin());
CREATE POLICY "Admins can manage volunteers" ON public.volunteers FOR ALL USING (public.is_admin());
CREATE POLICY "Admins can manage contacts" ON public.contacts FOR ALL USING (public.is_admin());
CREATE POLICY "Admins can manage news" ON public.news FOR ALL USING (public.is_admin());
CREATE POLICY "Admins can manage events" ON public.events FOR ALL USING (public.is_admin());
CREATE POLICY "Admins can manage stories" ON public.stories FOR ALL USING (public.is_admin());
CREATE POLICY "Admins can manage jobs" ON public.jobs FOR ALL USING (public.is_admin());
CREATE POLICY "Admins can manage job applications" ON public.job_applications FOR ALL USING (public.is_admin());
CREATE POLICY "Admins can manage profiles" ON public.profiles FOR ALL USING (public.is_admin());
