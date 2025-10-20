import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "your-supabase-url";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "your-supabase-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email_or_username: string;
          password: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          email_or_username: string;
          password: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          email_or_username?: string;
          password?: string;
          created_at?: string;
        };
      };
      posts: {
        Row: {
          id: string;
          content: string;
          author_id: string;
          emoji: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          content: string;
          author_id: string;
          emoji?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          content?: string;
          author_id?: string;
          emoji?: string | null;
          created_at?: string;
        };
      };
    };
  };
}
