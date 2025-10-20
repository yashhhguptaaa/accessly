import { Header } from "./components/Header";
import { Feed } from "./components/Feed";
import { useAuth } from "./hooks/useAuth";
import { AuthPage } from "./components/auth";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Modal } from "./components/Modal";
import { AuthModalProvider, useAuthModal } from "./contexts/AuthModalContext";
import { Fragment } from "react";

function AppContent() {
  const { user, isLoading } = useAuth();
  const {
    isAuthModalOpen,
    closeAuthModal,
    onAuthSuccess,
    handleLogin,
    handleLogout,
  } = useAuthModal();

  if (isLoading) {
    return <LoadingSpinner message="Checking authentication..." />;
  }

  return (
    <Fragment>
      <Header user={user} onLogin={handleLogin} onLogout={handleLogout} />
      <Feed />

      {/* Authentication Modal */}
      <Modal isOpen={isAuthModalOpen} onClose={closeAuthModal}>
        <AuthPage onAuthSuccess={onAuthSuccess} />
      </Modal>
    </Fragment>
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
