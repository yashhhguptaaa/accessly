import React from "react";
import { Layout } from "../Layout";
import heartLikeIcon from "/svg/heart-like.svg";
import commentLinesIcon from "/svg/comment-lines.svg";
import shareIcon from "/svg/share-icon.svg";

export interface Post {
  id: string;
  content: string;
  author_id: string;
  emoji: string | null;
  created_at: string;
  updated_at: string;
  author?: {
    username: string;
    email: string;
  };
}

interface FeedPostProps {
  post: Post;
  onLike?: (postId: string) => void;
  onComment?: (postId: string) => void;
  onShare?: (postId: string) => void;
}

export const FeedPost: React.FC<FeedPostProps> = ({
  post,
  onLike,
  onComment,
  onShare,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes} mins ago`;
    if (diffInMinutes < 1440)
      return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };
  return (
    <Layout className="flex flex-col w-min gap-1 sm:gap-2 !px-1 sm:!px-2 pt-1 sm:pt-2 !pb-2 sm:!pb-3">
      <div className="bg-white rounded-2xl p-2 sm:p-3 pr-4 sm:pr-8 pb-4 sm:pb-6 shadow-lg w-full flex flex-row gap-2 sm:gap-3">
        <div className="flex flex-col gap-2 sm:gap-3 items-center">
          <p className="w-10 h-10 sm:w-13 sm:h-13 bg-gray-100 rounded-xl flex items-center justify-center text-xs sm:text-sm">
            {post.author?.username?.slice(0, 2).toUpperCase()}
          </p>
          {post.emoji && (
            <p className="w-7 h-7 sm:w-9 sm:h-9 bg-gray-100 rounded-full flex items-center justify-center">
              <span className="text-lg sm:text-2xl">{post.emoji}</span>
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="flex flex-col gap-0 h-10 sm:h-13 justify-center">
            <p className="font-bold text-gray-900 text-sm">
              {post.author?.username || "Anonymous"}
            </p>
            <p className="text-gray-500 text-xs">
              {formatDate(post.created_at)}
            </p>
          </div>
          <p className="min-w-xs md:min-w-lg text-sm sm:text-base leading-relaxed">
            {post.content}
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2 sm:gap-5 ml-2 sm:ml-4">
        <button
          onClick={() => onLike?.(post.id)}
          className="transition-transform hover:scale-110"
        >
          <img
            src={heartLikeIcon}
            alt="like"
            width={18}
            height={18}
            className="sm:w-6 sm:h-6"
          />
        </button>
        <button
          onClick={() => onComment?.(post.id)}
          className="transition-transform hover:scale-110"
        >
          <img
            src={commentLinesIcon}
            alt="comment"
            width={20}
            height={20}
            className="sm:w-7 sm:h-7"
          />
        </button>
        <button
          onClick={() => onShare?.(post.id)}
          className="transition-transform hover:scale-110"
        >
          <img
            src={shareIcon}
            alt="share"
            width={20}
            height={20}
            className="sm:w-7 sm:h-7"
          />
        </button>
      </div>
    </Layout>
  );
};
