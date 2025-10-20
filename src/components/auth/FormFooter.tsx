import React from "react";

interface FormFooterProps {
  question: string;
  actionText: string;
  onAction: () => void;
}

const FormFooter: React.FC<FormFooterProps> = React.memo(
  ({ question, actionText, onAction }) => {
    return (
      <div className="text-center mt-6">
        <span className="text-sm">
          <span className="text-gray-600">{question} </span>
          <button
            onClick={onAction}
            className="text-blue-600 hover:text-blue-800 font-medium px-1 py-1 rounded transition-colors duration-200"
          >
            {actionText}
          </button>
        </span>
      </div>
    );
  }
);

FormFooter.displayName = "FormFooter";

export default FormFooter;
