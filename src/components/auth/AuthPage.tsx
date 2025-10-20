import { FormFooter, SignUpForm, SignInForm } from "./index";
import { Header } from "@/components/Header";
import { FloatingLayout, Layout } from "@/components/Layout";
import { useAuthPage } from "@/hooks/useAuthPage";

interface AuthPageProps {
  onAuthSuccess?: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuthSuccess }) => {
  const {
    isLoading,
    handleSignUp,
    handleSignIn,
    switchToSignIn,
    switchToSignUp,
    isSignUp,
  } = useAuthPage({ onAuthSuccess });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FloatingLayout>
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
      </FloatingLayout>
    </div>
  );
};

export default AuthPage;
