import { useState } from "react";
import { useAuth } from "./useAuth";
import { showToast } from "@/utils/toast";
import { useNavigate, useLocation } from "react-router-dom";

type AuthMode = "signin" | "signup";

interface UseAuthPageProps {
  onAuthSuccess?: () => void;
}

interface UseAuthPageReturn {
  mode: AuthMode;
  isLoading: boolean;
  handleSignUp: (data: {
    identifier: string;
    password: string;
    confirmPassword: string;
  }) => Promise<void>;
  handleSignIn: (data: { email: string; password: string }) => Promise<void>;
  switchToSignIn: () => void;
  switchToSignUp: () => void;
  isSignUp: boolean;
}

export const useAuthPage = ({
  onAuthSuccess,
}: UseAuthPageProps): UseAuthPageReturn => {
  const [mode, setMode] = useState<AuthMode>("signup");
  const { signIn, signUp, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAuthSuccess = () => {
    onAuthSuccess?.();

    // If on login page, redirect to homepage after successful authentication
    if (location.pathname === "/login") navigate("/");
  };

  const handleSignUp = async (data: {
    identifier: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      const { error } = await signUp({
        email: data.identifier,
        password: data.password,
        confirmPassword: data.confirmPassword,
        username: data.identifier, // Use identifier as username
      });

      if (error) {
        showToast.error("Sign up failed: " + error);
      } else {
        showToast.success(
          "Account created successfully! Please check your email to verify your account."
        );
        handleAuthSuccess();
      }
    } catch (error) {
      showToast.error("An unexpected error occurred during sign up");
    }
  };

  const handleSignIn = async (data: { email: string; password: string }) => {
    try {
      const { error } = await signIn({
        email: data.email,
        password: data.password,
      });

      if (error) {
        showToast.error("Sign in failed: " + error);
      } else {
        showToast.success(
          "Welcome back! You have been signed in successfully."
        );
        handleAuthSuccess();
      }
    } catch (error) {
      showToast.error("An unexpected error occurred during sign in");
    }
  };

  const switchToSignIn = () => setMode("signin");
  const switchToSignUp = () => setMode("signup");

  const isSignUp = mode === "signup";

  return {
    mode,
    isLoading: authLoading,
    handleSignUp,
    handleSignIn,
    switchToSignIn,
    switchToSignUp,
    isSignUp,
  };
};
