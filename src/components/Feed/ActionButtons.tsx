import React from "react";
import plusIcon from "/svg/plus-icon.svg";
import microphoneIcon from "/svg/microphone-icon.svg";
import videoIcon from "/svg/video-icon.svg";
import sendIcon from "/svg/send-icon.svg";

export const ActionButtons = React.memo(
  ({ onClick }: { onClick?: () => void }) => {
    return (
      <div className="flex flex-row gap-3">
        <button
          onClick={onClick}
          className="px-1 py-0 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
        >
          <img src={plusIcon} alt="plus" width={15} height={15} />
        </button>
        <button
          onClick={onClick}
          className="px-1 py-0 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
        >
          <img src={microphoneIcon} alt="microphone" width={15} height={15} />
        </button>
        <button
          onClick={onClick}
          className="px-1 py-0 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
        >
          <img src={videoIcon} alt="video" width={25} height={25} />
        </button>
      </div>
    );
  }
);

ActionButtons.displayName = "ActionButtons";

interface SendButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const SendButton: React.FC<SendButtonProps> = React.memo(
  ({ onClick, disabled = false }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`cursor-pointer transition-opacity ${
          disabled ? "opacity-50" : "hover:opacity-80"
        }`}
      >
        <img src={sendIcon} alt="send" width={25} height={25} />
      </button>
    );
  }
);

SendButton.displayName = "SendButton";
