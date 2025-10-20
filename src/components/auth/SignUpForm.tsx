import React, { useState } from "react";
import { validateIdentifier, validatePassword } from "@/utils/validation";
import { FormCard, FormHeader } from "./index";
import Input from "@/components/Input";

interface SignUpFormProps {
  onSubmit?: (data: SignUpData) => void;
  isLoading?: boolean;
}

interface SignUpData {
  identifier: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm: React.FC<SignUpFormProps> = React.memo(
  ({ onSubmit, isLoading = false }) => {
    const [formData, setFormData] = useState<SignUpData>({
      identifier: "",
      password: "",
      confirmPassword: "",
    });

    const [errors, setErrors] = useState<Partial<SignUpData>>({});

    const handleInputChange =
      (field: keyof SignUpData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [field]: value }));

        // Clear error when user starts typing
        if (errors[field]) {
          setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
      };

    const validateForm = (): boolean => {
      const newErrors: Partial<SignUpData> = {};

      // Validate identifier
      const identifierError = validateIdentifier(formData.identifier);
      if (identifierError) {
        newErrors.identifier = identifierError;
      }

      // Validate password
      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        newErrors.password = passwordError;
      }

      // Validate confirm password
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (validateForm()) {
        onSubmit?.(formData);
      }
    };

    return (
      <FormCard>
        <FormHeader
          title="Create an account to continue"
          description="Create an account to access all the features on this app"
        />
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Email or Username */}
          <Input
            id="identifier"
            label="Email or username"
            type="text"
            placeholder="Enter your email or username"
            value={formData.identifier}
            onChange={handleInputChange("identifier")}
            className="rounded-xl border-none !bg-gray-100"
            error={errors.identifier}
          />

          {/* Password */}
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange("password")}
            className="rounded-xl border-none !bg-gray-100"
            error={errors.password}
            showPasswordToggle
          />

          {/* Repeat Password */}
          <Input
            id="confirmPassword"
            label="Repeat password"
            type="password"
            placeholder="Enter your password again"
            value={formData.confirmPassword}
            onChange={handleInputChange("confirmPassword")}
            className="rounded-xl border-none !bg-gray-100"
            error={errors.confirmPassword}
            showPasswordToggle
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-800 disabled:bg-blue-500 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
      </FormCard>
    );
  }
);

SignUpForm.displayName = "SignUpForm";

export default SignUpForm;
