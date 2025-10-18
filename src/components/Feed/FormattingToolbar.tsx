import React from "react";
import deleteIcon from "/svg/trash-icon.svg";

interface FormattingToolbarProps {
  activeFormats: string[];
  onFormatToggle: (format: string) => void;
}

// Removed formatButtons array since we're using direct JSX now

export const FormattingToolbar: React.FC<FormattingToolbarProps> = React.memo(
  ({ activeFormats, onFormatToggle }) => {
    return (
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-1 bg-gray-100 rounded-lg p-1">
          {/* Paragraph Dropdown */}
          <button
            className={`px-3 py-2 h-8 rounded-md flex flex-row items-center justify-center gap-2 text-sm font-medium transition-all duration-200 ${
              activeFormats.includes("paragraph")
                ? "bg-white text-gray-900 shadow-sm"
                : "bg-transparent text-gray-600 hover:bg-white hover:text-gray-900"
            }`}
          >
            Paragraph
            <span className="text-xs font-extrabold pb-1">⌄</span>
          </button>

          {/* Bold Button */}
          <button
            onClick={() => onFormatToggle("bold")}
            className={`px-3 py-2 h-8 rounded-md flex flex-row items-center justify-center gap-2 text-sm font-medium transition-all duration-200 ${
              activeFormats.includes("bold")
                ? "bg-white text-gray-900 shadow-sm"
                : "bg-transparent text-gray-600 hover:bg-white hover:text-gray-900"
            }`}
          >
            B
          </button>

          {/* Italic Button */}
          <button
            onClick={() => onFormatToggle("italic")}
            className={`px-3 py-2 h-8 rounded-md flex flex-row items-center justify-center gap-2 text-sm font-medium transition-all duration-200 ${
              activeFormats.includes("italic")
                ? "bg-white text-gray-900 shadow-sm"
                : "bg-transparent text-gray-600 hover:bg-white hover:text-gray-900"
            }`}
          >
            I
          </button>

          {/* Underline Button */}
          <button
            onClick={() => onFormatToggle("underline")}
            className={`px-3 py-2 h-8 rounded-md flex flex-row items-center justify-center gap-2 text-sm font-medium transition-all duration-200 ${
              activeFormats.includes("underline")
                ? "bg-white text-gray-900 shadow-sm"
                : "bg-transparent text-gray-600 hover:bg-white hover:text-gray-900"
            }`}
          >
            U
          </button>

          {/* Align Left Button */}
          <button
            onClick={() => onFormatToggle("align-left")}
            className={`px-3 py-2 h-8 rounded-md flex flex-row items-center justify-center gap-2 text-sm font-medium transition-all duration-200 ${
              activeFormats.includes("align-left")
                ? "bg-white text-gray-900 shadow-sm"
                : "bg-transparent text-gray-600 hover:bg-white hover:text-gray-900"
            }`}
          >
            ≡
          </button>

          {/* Align Center Button */}
          <button
            onClick={() => onFormatToggle("align-center")}
            className={`px-3 py-2 h-8 rounded-md flex flex-row items-center justify-center gap-2 text-sm font-medium transition-all duration-200 ${
              activeFormats.includes("align-center")
                ? "bg-white text-gray-900 shadow-sm"
                : "bg-transparent text-gray-600 hover:bg-white hover:text-gray-900"
            }`}
          >
            ≡
          </button>

          {/* Quote Button */}
          <button
            onClick={() => onFormatToggle("quote")}
            className={`px-3 py-2 h-8 rounded-md flex flex-row items-center justify-center gap-2 text-sm font-medium transition-all duration-200 ${
              activeFormats.includes("quote")
                ? "bg-white text-gray-900 shadow-sm"
                : "bg-transparent text-gray-600 hover:bg-white hover:text-gray-900"
            }`}
          >
            99
          </button>

          {/* Code Button */}
          <button
            onClick={() => onFormatToggle("code")}
            className={`px-3 py-2 h-8 rounded-md flex flex-row items-center justify-center gap-2 text-sm font-medium transition-all duration-200 ${
              activeFormats.includes("code")
                ? "bg-white text-gray-900 shadow-sm"
                : "bg-transparent text-gray-600 hover:bg-white hover:text-gray-900"
            }`}
          >
            {"</>"}
          </button>
        </div>
        <div className="flex items-center">
          <button className="cursor-pointer w-8 h-8 rounded-md flex items-center justify-center bg-red-100 hover:bg-red-200 transition-all duration-200">
            <img src={deleteIcon} alt="delete" width={16} height={16} />
          </button>
        </div>
      </div>
    );
  }
);

export default FormattingToolbar;
