import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rwltpsxpmodcmelsxidd.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3bHRwc3hwbW9kY21lbHN4aWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA0OTg1ODIsImV4cCI6MjA5NjA3NDU4Mn0.Ii6cGKht5ulkZE5XLa0sUVBf72UEPxJ5YdqmwqMYpVg";

export const supabase = createClient(supabaseUrl, supabaseKey);