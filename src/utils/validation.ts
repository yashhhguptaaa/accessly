import type { ValidationError, ServerValidationResult } from "../types";

// Password strength requirements
const PASSWORD_MIN_LENGTH = 6;
const PASSWORD_REGEX = /^[a-zA-Z0-9]+$/;

export const validatePassword = (password: string): string | null => {
  if (!password) {
    return "Password is required";
  }

  if (password.length < PASSWORD_MIN_LENGTH) {
    return `Password must be at least ${PASSWORD_MIN_LENGTH} characters long`;
  }

  if (!PASSWORD_REGEX.test(password)) {
    return "Password can only contain letters and numbers";
  }

  return null;
};

export const validateUsername = (username: string): string | null => {
  if (!username.trim()) {
    return "Username is required";
  }

  if (username.length < 3) {
    return "Username must be at least 3 characters long";
  }

  if (username.length > 20) {
    return "Username must be less than 20 characters";
  }

  return null;
};

export const validateIdentifier = (identifier: string): string | null => {
  if (!identifier.trim()) {
    return "Email or username is required";
  }

  if (identifier.length < 3) {
    return "Email or username must be at least 3 characters long";
  }

  if (identifier.length > 50) {
    return "Email or username must be less than 50 characters";
  }

  return null;
};

// Server-side validation simulation
export const validateOnServer = async (
  data: Record<string, any>
): Promise<ServerValidationResult> => {
  // Simulate server delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const errors: Record<string, string> = {};

  // Identifier validation (email or username)
  if (data.identifier) {
    const identifierError = validateIdentifier(data.identifier);
    if (identifierError) {
      errors.identifier = identifierError;
    }
  }

  // Password validation
  if (data.password) {
    const passwordError = validatePassword(data.password);
    if (passwordError) {
      errors.password = passwordError;
    }
  }

  // Username validation
  if (data.username) {
    const usernameError = validateUsername(data.username);
    if (usernameError) {
      errors.username = usernameError;
    }
  }

  // Confirm password validation
  if (data.password && data.confirmPassword) {
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Client-side form validation
export const validateForm = (data: Record<string, any>): ValidationError[] => {
  const errors: ValidationError[] = [];

  Object.entries(data).forEach(([field, value]) => {
    let error: string | null = null;

    switch (field) {
      case "identifier":
        error = validateIdentifier(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
      case "username":
        error = validateUsername(value);
        break;
      case "confirmPassword":
        if (data.password && value !== data.password) {
          error = "Passwords do not match";
        }
        break;
    }

    if (error) {
      errors.push({ field, message: error });
    }
  });

  return errors;
};
