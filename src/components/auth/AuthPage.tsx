import { useState } from "react";

import FormFooter from "./FormFooter";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import { Header } from "../Header";
import { Layout } from "./Layout";

type AuthMode = "signin" | "signup";

const AuthPage = () => {
  const [mode, setMode] = useState<AuthMode>("signup");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async (data: {
    identifier: string;
    password: string;
    confirmPassword: string;
  }) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual sign-up logic
      console.log("Sign up data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error("Sign up error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignIn = async (data: {
    identifier: string;
    password: string;
  }) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual sign-in logic
      console.log("Sign in data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const switchToSignIn = () => setMode("signin");
  const switchToSignUp = () => setMode("signup");

  const isSignUp = mode === "signup";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Layout>
        {isSignUp ? (
          <SignUpForm onSubmit={handleSignUp} isLoading={isLoading} />
        ) : (
          <SignInForm onSubmit={handleSignIn} isLoading={isLoading} />
        )}

        {/* Form Footer */}
        <FormFooter
          question={
            isSignUp ? "Already have an account?" : "Don't have an account?"
          }
          actionText={isSignUp ? "Sign In" : "Sign Up"}
          onAction={isSignUp ? switchToSignIn : switchToSignUp}
        />
      </Layout>
    </div>
  );
};

export default AuthPage;
