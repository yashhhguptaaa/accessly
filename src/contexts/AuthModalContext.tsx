import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthModalContextType {
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  onAuthSuccess: () => void;
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

  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const onAuthSuccess = () => {
    closeAuthModal();
  };

  const value: AuthModalContextType = {
    isAuthModalOpen,
    openAuthModal,
    closeAuthModal,
    onAuthSuccess,
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
