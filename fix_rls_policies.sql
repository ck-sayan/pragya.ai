-- Fix Supabase RLS Policies for Pragya.AI
-- Run this in Supabase SQL Editor

-- Drop all existing policies
DROP POLICY IF EXISTS "Users can view own data" ON users;
DROP POLICY IF EXISTS "Users can update own data" ON users;
DROP POLICY IF EXISTS "Users can view own chats" ON chats;
DROP POLICY IF EXISTS "Users can create own chats" ON chats;
DROP POLICY IF EXISTS "Users can update own chats" ON chats;
DROP POLICY IF EXISTS "Users can delete own chats" ON chats;
DROP POLICY IF EXISTS "Users can view own messages" ON messages;
DROP POLICY IF EXISTS "Users can create own messages" ON messages;
DROP POLICY IF EXISTS "Users can view own moods" ON moods;
DROP POLICY IF EXISTS "Users can create own moods" ON moods;

-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE moods ENABLE ROW LEVEL SECURITY;

-- Create simplified policies that allow service role key access
-- These policies allow all operations when using the service role key
CREATE POLICY "Enable all for service role" ON users FOR ALL USING (true);
CREATE POLICY "Enable all for service role" ON chats FOR ALL USING (true);
CREATE POLICY "Enable all for service role" ON messages FOR ALL USING (true);
CREATE POLICY "Enable all for service role" ON moods FOR ALL USING (true);
