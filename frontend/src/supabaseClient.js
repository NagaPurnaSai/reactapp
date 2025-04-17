// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hjmpgjvmnxrgtocjisos.supabase.co"; // replace with your Supabase project URL
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbXBnanZtbnhyZ3RvY2ppc29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUyMDY2MzQsImV4cCI6MjA1MDc4MjYzNH0.G7FAlxSx21LFX_7P7SMXpRdwNs-tyKRXhJlBrbYSDe8";             // replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
