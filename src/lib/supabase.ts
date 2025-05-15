
import { createClient } from '@supabase/supabase-js';

// Use the environment variables or fallback to the provided credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://keofpidwarjmhsvzhqoc.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Make sure we have an anon key
if (!supabaseAnonKey) {
  console.error('Supabase anon key is missing. Please add VITE_SUPABASE_ANON_KEY to your .env file');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey || '');
