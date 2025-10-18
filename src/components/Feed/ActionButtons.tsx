import plusIcon from "/svg/plus-icon.svg";
import microphoneIcon from "/svg/microphone-icon.svg";
import videoIcon from "/svg/video-icon.svg";
import sendIcon from "/svg/send-icon.svg";

export const ActionButtons = () => {
  return (
    <div className="flex flex-row gap-3">
      <button className="px-1 py-0 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
        <img src={plusIcon} alt="plus" width={15} height={15} />
      </button>
      <button className="px-1 py-0 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
        <img src={microphoneIcon} alt="microphone" width={15} height={15} />
      </button>
      <button className="px-1 py-0 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
        <img src={videoIcon} alt="video" width={25} height={25} />
      </button>
    </div>
  );
};

export const SendButton = () => {
  return (
    <button className="cursor-pointer">
      <img src={sendIcon} alt="send" width={25} height={25} />
    </button>
  );
};
