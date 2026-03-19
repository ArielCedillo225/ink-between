import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Importante: que diga "export const supabase"
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
