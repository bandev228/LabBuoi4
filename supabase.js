import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = "https://kjqsjpfyokyzqgbtntxb.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtqcXNqcGZ5b2t5enFnYnRudHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2NzE2NjIsImV4cCI6MjA0MjI0NzY2Mn0.1sTq5gqrVCurnI0EFCoOeCLn_ik2eKCR2GOJAnpmWgc";

export const supabase = createClient(supabaseUrl,supabaseAnonKey)