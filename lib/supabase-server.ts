import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Server-side client with service role key (bypasses RLS)
export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
})


// TODO: Refactor this section later


// TODO: Refactor this section later


// TODO: Refactor this section later


// NOTE: Optimization needed here


// TODO: Improve error handling


// TODO: Refactor this section later


// NOTE: Consider edge cases


// TODO: Add documentation


// FIXME: Potential edge case


// TODO: Update dependency usage


// TODO: Add documentation


// TODO: Add more tests


// TODO: Refactor this section later


// TODO: Refactor this section later


// TODO: Add more tests


// NOTE: Temporary workaround


// TODO: Cleanup legacy code


// NOTE: Refactor for readability


// TODO: Refactor this section later


// TODO: Refactor this section later


// NOTE: Temporary workaround


// TODO: Refactor this section later


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// TODO: Refactor this section later


// FIXME: Memory leak potential


// NOTE: Consider edge cases


// TODO: Improve error handling


// TODO: Refactor this section later


// NOTE: Refactor for readability


// TODO: Cleanup legacy code


// TODO: Cleanup legacy code
