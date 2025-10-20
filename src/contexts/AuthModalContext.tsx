import { useAuth } from "@/hooks/useAuth";
import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthModalContextType {
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  onAuthSuccess: () => void;
  handleLogin: () => void;
  handleLogout: () => Promise<void>;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(
  undefined
);

interface AuthModalProviderProps {
  children: ReactNode;
}

export const AuthModalProvider: React.FC<AuthModalProviderProps> = ({
  children,
}) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const router = useNavigate();
  const { logout } = useAuth();

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const onAuthSuccess = () => {
    closeAuthModal();
  };

  const handleLogin = () => {
    router("/login");
  };

  const handleLogout = async () => {
    await logout();
  };

  const value: AuthModalContextType = {
    isAuthModalOpen,
    openAuthModal,
    closeAuthModal,
    onAuthSuccess,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthModalContext.Provider value={value}>
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = (): AuthModalContextType => {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error("useAuthModal must be used within an AuthModalProvider");
  }
  return context;
};
