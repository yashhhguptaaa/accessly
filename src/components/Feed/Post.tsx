import { Layout } from "../Layout";
import heartLikeIcon from "/svg/heart-like.svg";
import commentLinesIcon from "/svg/comment-lines.svg";
import shareIcon from "/svg/share-icon.svg";

export const FeedPost = () => {
  return (
    <Layout className="flex flex-col w-min gap-1 sm:gap-2 !px-1 sm:!px-2 pt-1 sm:pt-2 !pb-2 sm:!pb-3">
      <div className="bg-white rounded-2xl p-2 sm:p-3 pr-4 sm:pr-8 pb-4 sm:pb-6 shadow-lg w-full flex flex-row gap-2 sm:gap-3">
        <div className="flex flex-col gap-2 sm:gap-3 items-center">
          <p className="w-10 h-10 sm:w-13 sm:h-13 bg-gray-100 rounded-xl flex items-center justify-center text-xs sm:text-sm">
            US
          </p>
          <p className="w-7 h-7 sm:w-9 sm:h-9 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-lg sm:text-2xl">🫤</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="flex flex-col gap-0 h-10 sm:h-13 justify-center">
            <p className="font-bold text-gray-900 text-sm">Theresa Webb</p>
            <p className="text-gray-500 text-xs">5 mins ago</p>
          </div>
          <p className="min-w-xs md:min-w-lg text-sm sm:text-base leading-relaxed">
            Here's a 50-word Lorem ipsum text: ``` Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. ``` This is exactly 50 words and follows the
            classic Lorem ipsum format.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2 sm:gap-5 ml-2 sm:ml-4">
        <img
          src={heartLikeIcon}
          alt="like"
          width={18}
          height={18}
          className="sm:w-6 sm:h-6"
        />
        <img
          src={commentLinesIcon}
          alt="comment"
          width={20}
          height={20}
          className="sm:w-7 sm:h-7"
        />
        <img
          src={shareIcon}
          alt="share"
          width={20}
          height={20}
          className="sm:w-7 sm:h-7"
        />
      </div>
    </Layout>
  );
};
