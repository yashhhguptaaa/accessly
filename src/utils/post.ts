import { supabase } from "@/lib/supabase";
import { showActionToast } from "./toast";
import type { Post } from "@/components/Feed/Post";

interface CreatePostParams {
  content: string;
  emoji?: string | null;
  authorId: string;
}

interface CreatePostCallbacks {
  onSuccess?: (post: Post) => void;
  onError?: (error: string) => void;
}

export const createPost = async (
  { content, emoji, authorId }: CreatePostParams,
  { onSuccess, onError }: CreatePostCallbacks = {}
) => {
  try {
    const { data, error } = await supabase
      .from("posts")
      .insert({
        content: content.trim(),
        author_id: authorId,
        emoji: emoji,
      })
      .select(
        `
        *,
        users:author_id (
          email_or_username
        )
      `
      )
      .single();

    if (error) {
      const errorMessage = error.message || "Failed to create post";
      showActionToast("POST_CREATE_ERROR", true);
      onError?.(errorMessage);
      return null;
    }

    // Create post object
    const newPost: Post = {
      id: data.id,
      content: data.content,
      author_id: data.author_id,
      emoji: data.emoji,
      created_at: data.created_at,
      updated_at: data.updated_at,
      author: {
        username: data.users?.email_or_username || "Unknown",
        email: data.users?.email_or_username || "",
      },
    };

    showActionToast("POST_CREATED", true);
    onSuccess?.(newPost);
    return newPost;
  } catch (error) {
    const errorMessage = "An unexpected error occurred while creating the post";
    showActionToast("POST_CREATE_ERROR", true);
    onError?.(errorMessage);
    return null;
  }
};
