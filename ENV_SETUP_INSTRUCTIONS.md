# Environment Variables Setup

## Add these to your .env.local file:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

OPENROUTER_API_KEY=your_openrouter_api_key

## How to get SUPABASE_SERVICE_ROLE_KEY:

1. Go to https://supabase.com/dashboard
2. Select your project
3. Go to Settings → API
4. Copy the "service_role" key (NOT the anon key)
5. Add it to .env.local as SUPABASE_SERVICE_ROLE_KEY

## Add to Vercel:

After adding to .env.local, also add SUPABASE_SERVICE_ROLE_KEY to Vercel:

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add: SUPABASE_SERVICE_ROLE_KEY = [your service role key]
5. Check: Production, Preview, Development
6. Save
7. Redeploy your app
