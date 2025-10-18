import React, { forwardRef, useState } from "react";
import {
  getInputClasses,
  labelClasses,
  errorClasses,
  helperTextClasses,
  passwordToggleButtonClasses,
  passwordToggleIconClasses,
  type InputSize,
  type InputVariant,
} from "./style";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: InputSize;
  variant?: InputVariant;
  showPasswordToggle?: boolean;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      size = "md",
      variant = "default",
      showPasswordToggle = false,
      required = false,
      className = "",
      type = "text",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    const inputClasses = getInputClasses(
      size,
      variant,
      error,
      isPassword,
      showPasswordToggle,
      className
    );

    const handlePasswordToggle = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className={labelClasses}>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <input
            ref={ref}
            type={inputType}
            className={inputClasses}
            {...props}
          />

          {isPassword && showPasswordToggle && (
            <div className="absolute inset-y-0 right-0 pr-2 sm:pr-3 flex items-center">
              <button
                type="button"
                onClick={handlePasswordToggle}
                className={passwordToggleButtonClasses}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg
                    className={passwordToggleIconClasses}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className={passwordToggleIconClasses}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>

        {error && (
          <p className={errorClasses} role="alert">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p className={helperTextClasses}>{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
