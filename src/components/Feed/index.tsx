import { FeedPost } from "./Post";
import { WritePost } from "./WritePost";

export const Feed = () => {
  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full mt-5 sm:mt-10">
      <WritePost />
      <FeedPost />
    </div>
  );
};
