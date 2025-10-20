import { supabase } from "@/lib/supabase";
import type { User, LoginCredentials, RegisterCredentials } from "@/types";

// Simplified authentication functions - no cookies, no username lookup

export const signInWithCredentials = async (
  credentials: LoginCredentials
): Promise<{ user: User | null; error: string | null }> => {
  try {
    if (!credentials.email || !credentials.password) {
      return { user: null, error: "Email and password are required" };
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    });

    if (error) {
      return { user: null, error: error.message };
    }

    return {
      user: data.user
        ? {
            id: data.user.id,
            username: data.user.email?.split("@")[0] || "",
            email: data.user.email || "",
          }
        : null,
      error: null,
    };
  } catch (error) {
    return { user: null, error: "An unexpected error occurred" };
  }
};

export const signUpWithCredentials = async (
  credentials: RegisterCredentials
): Promise<{ user: User | null; error: string | null }> => {
  try {
    if (!credentials.email || !credentials.password) {
      return { user: null, error: "Email and password are required" };
    }

    if (credentials.password !== credentials.confirmPassword) {
      return { user: null, error: "Passwords do not match" };
    }

    const { data, error } = await supabase.auth.signUp({
      email: credentials.email,
      password: credentials.password,
    });

    if (error) {
      return { user: null, error: error.message };
    }

    return {
      user: data.user
        ? {
            id: data.user.id,
            username: data.user.email?.split("@")[0] || "",
            email: data.user.email || "",
          }
        : null,
      error: null,
    };
  } catch (error) {
    return { user: null, error: "An unexpected error occurred" };
  }
};

export const signOut = async (): Promise<{ error: string | null }> => {
  try {
    const { error } = await supabase.auth.signOut();
    return { error: error?.message || null };
  } catch (error) {
    return { error: "An unexpected error occurred" };
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session?.user) {
      return {
        id: session.user.id,
        username: session.user.email?.split("@")[0] || "",
        email: session.user.email || "",
      };
    }

    return null;
  } catch (error) {
    return null;
  }
};
