import { supabase } from "@/lib/supabase";
import type { User, LoginCredentials, RegisterCredentials } from "@/types";
import { setSession, getSession, clearSession } from "./session";

const hashPassword = (password: string): string => {
  // hashing the password using btoa
  return btoa(password);
};

export const signInWithCredentials = async (
  credentials: LoginCredentials
): Promise<{ user: User | null; error: string | null }> => {
  try {
    if (!credentials.email || !credentials.password) {
      return { user: null, error: "Email/username and password are required" };
    }

    const hashedPassword = hashPassword(credentials.password);

    // Check if user exists with this email/username and password
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email_or_username", credentials.email)
      .eq("password", hashedPassword)
      .single();

    if (error || !data) {
      return { user: null, error: "Invalid credentials" };
    }

    const user: User = {
      id: data.id,
      username: data.email_or_username,
      email: data.email_or_username,
    };

    // Set session in localStorage
    setSession(user);

    return { user, error: null };
  } catch (error) {
    return { user: null, error: "An unexpected error occurred" };
  }
};

export const signUpWithCredentials = async (
  credentials: RegisterCredentials
): Promise<{ user: User | null; error: string | null }> => {
  try {
    if (!credentials.email || !credentials.password) {
      return { user: null, error: "Email/username and password are required" };
    }

    if (credentials.password !== credentials.confirmPassword) {
      return { user: null, error: "Passwords do not match" };
    }

    const hashedPassword = hashPassword(credentials.password);

    // Check if user already exists
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("email_or_username", credentials.email)
      .single();

    if (existingUser) {
      return {
        user: null,
        error: "User already exists with this email/username",
      };
    }

    // Insert new user
    const { data, error } = await supabase
      .from("users")
      .insert({
        email_or_username: credentials.email,
        password: hashedPassword,
      })
      .select()
      .single();

    if (error) {
      return { user: null, error: error.message };
    }

    const user: User = {
      id: data.id,
      username: data.email_or_username,
      email: data.email_or_username,
    };

    // Set session in localStorage
    setSession(user);

    return { user, error: null };
  } catch (error) {
    return { user: null, error: "An unexpected error occurred" };
  }
};

export const signOut = async (): Promise<{ error: string | null }> => {
  try {
    clearSession();
    return { error: null };
  } catch (error) {
    return { error: "An unexpected error occurred" };
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    return getSession();
  } catch (error) {
    return null;
  }
};
