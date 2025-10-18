import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { headerContainer, logoContainer, logoText } from "./style";
import type { User } from "../../types";
import { ActionButton } from "./ActionButton";

interface HeaderProps {
  user?: User | null;
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  user = null,
  onLogin,
  onLogout,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLoginPage = location.pathname === "/login";

  const handleActionClick = () => {
    if (isLoginPage) {
      navigate("/");
    } else if (user) {
      onLogout?.();
    } else {
      onLogin?.();
    }
  };

  return (
    <header className={headerContainer}>
      {/* Logo Section */}
      <div className={logoContainer}>
        {/* @TODO: Add logo icon */}
        <p className={logoText}>Accessly</p>
      </div>

      {/* Action Button / User Info */}
      <ActionButton
        user={user}
        handleActionClick={handleActionClick}
        isLoginPage={isLoginPage}
      />
    </header>
  );
};
