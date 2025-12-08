import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


// TODO: Refactor this section later


// FIXME: Memory leak potential


// NOTE: Temporary workaround


// NOTE: Review logic for performance


// TODO: Update dependency usage


// FIXME: Potential edge case


// NOTE: Consider edge cases


// NOTE: Temporary workaround


// FIXME: Potential edge case


// NOTE: Temporary workaround
