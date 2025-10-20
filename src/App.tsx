import { Header } from "./components/Header";
import { Feed } from "./components/Feed";
import { useAuth } from "./hooks/useAuth";
import { AuthPage } from "./components/auth";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Modal } from "./components/Modal";
import { AuthModalProvider, useAuthModal } from "./contexts/AuthModalContext";

function AppContent() {
  const { user, logout, isLoading } = useAuth();
  const { isAuthModalOpen, closeAuthModal, onAuthSuccess } = useAuthModal();

  const handleLogin = () => {
    // This will be handled by the context
  };

  const handleLogout = async () => {
    await logout();
  };

  if (isLoading) {
    return <LoadingSpinner message="Checking authentication..." />;
  }

  return (
    <>
      <Header user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <Feed />

      {/* Authentication Modal */}
      <Modal isOpen={isAuthModalOpen} onClose={closeAuthModal}>
        <AuthPage onAuthSuccess={onAuthSuccess} />
      </Modal>
    </>
  );
}

function App() {
  return (
    <AuthModalProvider>
      <AppContent />
    </AuthModalProvider>
  );
}

export default App;
