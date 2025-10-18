import classNames from "classnames";

export type InputSize = "sm" | "md" | "lg";
export type InputVariant = "default" | "error" | "success";

const sizeClasses = {
  sm: "px-3 py-2 text-sm sm:px-3 sm:py-2",
  md: "px-3 py-2.5 text-sm sm:px-4 sm:py-3 sm:text-base",
  lg: "px-4 py-3 text-base sm:px-5 sm:py-4 sm:text-lg",
};

export const getVariantClasses = (
  variant: InputVariant,
  error?: string
): string => {
  const variantClasses = {
    default: error
      ? "border-red-300 focus:border-red-500 focus:ring-red-500"
      : "border-gray-300",
    error: "border-red-300 focus:border-red-500 focus:ring-red-500",
    success: "border-green-300",
  };

  return variantClasses[variant];
};

export const getInputClasses = (
  size: InputSize,
  variant: InputVariant,
  error?: string,
  isPassword?: boolean,
  showPasswordToggle?: boolean,
  className?: string,
  placeholderFontWeight: string = "font-normal"
): string => {
  return classNames(
    // Base classes
    "w-full rounded-lg border bg-white transition-colors duration-200",
    "focus:outline-none",
    "disabled:bg-gray-100 disabled:cursor-not-allowed",
    `placeholder:text-gray-500 ${placeholderFontWeight}`,
    "min-h-[44px] sm:min-h-[48px] md:min-h-[52px]",

    // Size classes
    sizeClasses[size],

    // Variant classes
    getVariantClasses(variant, error),

    // Conditional classes
    {
      "pr-8 sm:pr-10": isPassword && showPasswordToggle,
    },

    // Custom className
    className
  );
};

// Static className values
export const labelClasses =
  "block text-sm font-medium text-gray-700 mb-2 sm:text-base";

export const errorClasses = "mt-2 text-xs sm:text-sm text-red-600";

export const helperTextClasses = "mt-2 text-xs sm:text-sm text-gray-500";

export const passwordToggleButtonClasses =
  "text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 p-1 touch-manipulation";

export const passwordToggleIconClasses = "w-4 h-4 sm:w-5 sm:h-5";
