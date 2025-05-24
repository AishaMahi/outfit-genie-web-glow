
import { createClient } from '@supabase/supabase-js';

// Use the environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Make sure we have the required environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Add some debugging to help diagnose connection issues
console.log('Supabase client initialized with URL:', supabaseUrl);
console.log('Anon key available:', !!supabaseAnonKey);
