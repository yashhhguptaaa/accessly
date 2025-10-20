import React from "react";
import {
  actionButtonContainer,
  actionButtonText,
  userInfoContainer,
  usernameText,
} from "./style";
import type { User } from "../../types";

export const ActionButton = React.memo(
  ({
    user,
    handleActionClick,
    isLoginPage,
  }: {
    user: User | null;
    handleActionClick: () => void;
    isLoginPage: boolean;
  }) => {
    if (user) {
      return (
        <div className={userInfoContainer}>
          {/* @TODO: Add user avatar icon */}
          <span className={usernameText}>{user.username}</span>
        </div>
      );
    }

    return (
      <button onClick={handleActionClick} className={actionButtonContainer}>
        <span className={actionButtonText}>
          {isLoginPage ? "Back to home" : "Login"}
        </span>
        {!isLoginPage && <>{/* @TODO: Add login icon */}</>}
      </button>
    );
  }
);

ActionButton.displayName = "ActionButton";
