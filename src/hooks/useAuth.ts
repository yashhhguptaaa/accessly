import { useState, useCallback } from "react";
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
  const [isLoading, setIsLoading] = useState(false);

  const user = getCurrentUser();

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
