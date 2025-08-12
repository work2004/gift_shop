import { createClient } from '@supabase/supabase-js'

// Apna Supabase URL aur anon key yahan dalna
const supabaseUrl = 'https://mymdzejjclmjzttyhsfl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15bWR6ZWpqY2xtanp0dHloc2ZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5OTI0ODksImV4cCI6MjA3MDU2ODQ4OX0.sN0Cy-om05jz119YNA8HOkQZDos2aGKLlZqFHrRHv7g'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
