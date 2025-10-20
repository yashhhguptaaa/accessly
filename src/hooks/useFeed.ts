import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { useAuthModal } from "@/contexts/AuthModalContext";
import { showActionToast } from "@/utils/toast";
import type { Post } from "@/components/Feed/Post";

export const useFeed = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();
  const { openAuthModal } = useAuthModal();

  useEffect(() => {
    fetchPosts();

    // Subscribe to new posts
    const subscription = supabase
      .channel("posts")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "posts" },
        (payload) => {
          const newPost = payload.new as any;
          // Fetch the complete post with author info
          fetchPostWithAuthor(newPost.id).then((post) => {
            if (post) {
              setPosts((prev) => [post, ...prev]);
            }
          });
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("posts")
        .select(
          `
          *,
          users:author_id (
            email_or_username
          )
        `
        )
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPosts(data || []);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPostWithAuthor = async (postId: string): Promise<Post | null> => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select(
          `
          *,
          users:author_id (
            email_or_username
          )
        `
        )
        .eq("id", postId)
        .single();

      if (error) {
        console.error("Error fetching post:", error);
        return null;
      }

      return {
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
    } catch (error) {
      console.error("Error fetching post:", error);
      return null;
    }
  };

  const handlePostCreated = (newPost: Post) => {
    setPosts((prev) => [newPost, ...prev]);
    showActionToast("POST_CREATED", isAuthenticated);
  };

  const handleUnimplementedAction = () => {
    if (isAuthenticated) {
      showActionToast("FUNCTION_NOT_IMPLEMENTED", true);
    } else {
      openAuthModal();
    }
  };

  const handleLike = () => handleUnimplementedAction();
  const handleComment = () => handleUnimplementedAction();
  const handleShare = () => handleUnimplementedAction();

  return {
    posts,
    loading,
    handlePostCreated,
    handleLike,
    handleComment,
    handleShare,
    refetchPosts: fetchPosts,
    handleUnimplementedAction,
  };
};
