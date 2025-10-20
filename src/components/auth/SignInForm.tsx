import React, { useState } from "react";
import { validatePassword } from "@/utils/validation";
import { FormCard, FormHeader } from "./index";
import Input from "@/components/Input";

interface SignInFormProps {
  onSubmit?: (data: SignInData) => void;
  isLoading?: boolean;
}

interface SignInData {
  email: string;
  password: string;
}

const SignInForm: React.FC<SignInFormProps> = React.memo(
  ({ onSubmit, isLoading: externalLoading }) => {
    const [formData, setFormData] = useState<SignInData>({
      email: "",
      password: "",
    });

    const [errors, setErrors] = useState<Partial<SignInData>>({});

    const handleInputChange =
      (field: keyof SignInData) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [field]: value }));

        // Clear error when user starts typing
        if (errors[field]) {
          setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
      };

    const validateForm = (): boolean => {
      const newErrors: Partial<SignInData> = {};

      // Validate email
      if (!formData.email) {
        newErrors.email = "Email is required";
      }

      // Validate password
      const passwordError = validatePassword(formData.password);
      if (passwordError) {
        newErrors.password = passwordError;
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
      <FormCard className="min-w-xs md:min-w-md">
        <FormHeader
          title="Sign in to continue"
          description="Sign in to access all the features on this app"
        />
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Email */}
          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange("email")}
            className="rounded-xl border-none !bg-gray-100"
            error={errors.email}
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={externalLoading}
            className="w-full bg-blue-600 hover:bg-blue-800 disabled:bg-blue-500 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {externalLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </FormCard>
    );
  }
);

SignInForm.displayName = "SignInForm";

export default SignInForm;
