import { useState } from "react";
import { createPost } from "@/utils/post";
import type { Post } from "@/components/Feed/Post";

interface UseCreatePostParams {
  content: string;
  emoji?: string | null;
  authorId: string;
}

interface UseCreatePostCallbacks {
  onSuccess?: (post: Post) => void;
  onError?: (error: string) => void;
}

interface UseCreatePostReturn {
  createPost: (
    params: UseCreatePostParams,
    callbacks?: UseCreatePostCallbacks
  ) => Promise<void>;
  isSubmitting: boolean;
  reset: () => void;
}

export const useCreatePost = (): UseCreatePostReturn => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreatePost = async (
    params: UseCreatePostParams,
    callbacks: UseCreatePostCallbacks = {}
  ) => {
    if (!params.content.trim() || !params.authorId || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      await createPost(
        {
          content: params.content,
          emoji: params.emoji,
          authorId: params.authorId,
        },
        {
          onSuccess: (newPost) => {
            callbacks.onSuccess?.(newPost);
          },
          onError: (error) => {
            callbacks.onError?.(error);
          },
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setIsSubmitting(false);
  };

  return {
    createPost: handleCreatePost,
    isSubmitting,
    reset,
  };
};
