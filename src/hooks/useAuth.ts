import { useState, useEffect, useCallback } from "react";
import {
  getCurrentUser,
  signInWithCredentials,
  signUpWithCredentials,
  signOut,
} from "@/utils/auth";
import type { User, LoginCredentials, RegisterCredentials } from "@/types";

interface UseAuthReturn {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (credentials: LoginCredentials) => Promise<{ error: string | null }>;
  signUp: (
    credentials: RegisterCredentials
  ) => Promise<{ error: string | null }>;
  logout: () => Promise<{ error: string | null }>;
}

export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing user session on mount
  useEffect(() => {
    const checkUser = async () => {
      setIsLoading(true);
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Error checking user session:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, []);

  const signIn = useCallback(
    async (
      credentials: LoginCredentials
    ): Promise<{ error: string | null }> => {
      setIsLoading(true);
      try {
        const result = await signInWithCredentials(credentials);

        if (result.error) {
          setIsLoading(false);
          return { error: result.error };
        }

        setUser(result.user);
        setIsLoading(false);
        return { error: null };
      } catch (error) {
        setIsLoading(false);
        return { error: "An unexpected error occurred" };
      }
    },
    []
  );

  const signUp = useCallback(
    async (
      credentials: RegisterCredentials
    ): Promise<{ error: string | null }> => {
      setIsLoading(true);
      try {
        const result = await signUpWithCredentials(credentials);

        if (result.error) {
          setIsLoading(false);
          return { error: result.error };
        }

        // Note: User might need to verify email before being fully signed in
        setUser(result.user);
        setIsLoading(false);
        return { error: null };
      } catch (error) {
        setIsLoading(false);
        return { error: "An unexpected error occurred" };
      }
    },
    []
  );

  const logout = useCallback(async (): Promise<{ error: string | null }> => {
    setIsLoading(true);
    try {
      const result = await signOut();
      setUser(null);
      setIsLoading(false);
      return result;
    } catch (error) {
      setIsLoading(false);
      return { error: "An unexpected error occurred" };
    }
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    signIn,
    signUp,
    logout,
  };
};
