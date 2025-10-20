import { FeedPost } from "./Post";
import { WritePost } from "./WritePost";
import { useFeed } from "@/hooks/useFeed";
import { LoadingSpinner } from "../LoadingSpinner";

export const Feed = () => {
  const {
    posts,
    loading,
    handlePostCreated,
    handleLike,
    handleComment,
    handleShare,
  } = useFeed();

  if (loading) {
    return (
      <div className="flex flex-col gap-10 items-center justify-center w-full mt-5 sm:mt-10">
        <LoadingSpinner message="Loading posts..." />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center w-full mt-5 sm:mt-10">
      <WritePost onPostCreated={handlePostCreated} />
      {posts.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No posts yet. Be the first to share something!</p>
        </div>
      ) : (
        posts.map((post) => (
          <FeedPost
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
            onShare={handleShare}
          />
        ))
      )}
    </div>
  );
};
