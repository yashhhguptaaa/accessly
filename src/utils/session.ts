import type { User } from "@/types";

const SESSION_KEY = "accessly_session";
const SESSION_EXPIRY_HOURS = 24; // 24 hours

interface SessionData {
  user: User;
  expiresAt: number;
}

export const setSession = (user: User): void => {
  const expiresAt = Date.now() + SESSION_EXPIRY_HOURS * 60 * 60 * 1000;
  const sessionData: SessionData = {
    user,
    expiresAt,
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
};

export const getSession = (): User | null => {
  try {
    const sessionStr = localStorage.getItem(SESSION_KEY);
    if (!sessionStr) return null;

    const sessionData: SessionData = JSON.parse(sessionStr);

    // Check if session has expired
    if (Date.now() > sessionData.expiresAt) {
      clearSession();
      return null;
    }

    return sessionData.user;
  } catch (error) {
    console.error("Error getting session:", error);
    clearSession();
    return null;
  }
};

export const clearSession = (): void => {
  localStorage.removeItem(SESSION_KEY);
};
