import React, { useState } from "react";
import EmojiSelector from "./EmojiSelector";
import FormattingToolbar from "./FormattingToolbar";
import { Layout } from "../Layout";
import { ActionButtons, SendButton } from "./ActionButtons";
import Input from "../Input";
import { useAuth } from "@/hooks/useAuth";
import { useCreatePost } from "@/hooks/useCreatePost";
import { useAuthModal } from "@/contexts/AuthModalContext";
import { showActionToast } from "@/utils/toast";
import type { Post } from "./Post";
import { useFeed } from "@/hooks/useFeed";

interface WritePostProps {
  onPostCreated?: (post: Post) => void;
}

export const WritePost: React.FC<WritePostProps> = ({ onPostCreated }) => {
  const [postContent, setPostContent] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuth();
  const { openAuthModal } = useAuthModal();
  const { handleUnimplementedAction } = useFeed();

  // Use the custom hook for post creation
  const { createPost, isSubmitting } = useCreatePost();

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmoji(() => emoji);
  };

  const handleSubmitPost = async () => {
    if (!postContent.trim()) return;

    if (isAuthenticated) {
      if (!user?.id) return;

      await createPost(
        {
          content: postContent,
          emoji: selectedEmoji,
          authorId: user.id,
        },
        {
          onSuccess: (newPost) => {
            // Reset form on success
            setPostContent("");
            setSelectedEmoji(null);
            onPostCreated?.(newPost);
          },
          onError: (error) => {
            console.error("Post creation failed:", error);
          },
        }
      );
    } else {
      showActionToast("LOGIN_REQUIRED", false);
      openAuthModal();
    }
  };

  return (
    <Layout className="!p-1 sm:!p-2 min-w-[480px] md:min-w-[638px]">
      <div className="bg-white border border-gray-300 rounded-t-2xl p-2 sm:p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] w-full flex flex-col gap-2 sm:gap-3">
        {/* Formatting Toolbar */}
        <FormattingToolbar />

        {/* Text Input Area */}
        <div className="flex flex-row gap-2 sm:gap-3">
          <EmojiSelector
            onEmojiSelect={handleEmojiSelect}
            selectedEmoji={selectedEmoji}
          />
          <Input
            type="textarea"
            value={postContent}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setPostContent(e.target.value)
            }
            placeholder="How are you feeling today?"
            placeholderFontWeight="font-thin"
            className="w-full resize-none mt-[-12px] ml-[-11px] focus:!outline-none border-none "
            rows={5}
          />
        </div>
      </div>

      {/* Preview Section */}
      <div className="bg-white border border-t-0 border-gray-300 rounded-b-2xl px-2 py-1 sm:px-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] w-full flex flex-row justify-between">
        <ActionButtons onClick={handleUnimplementedAction} />
        <SendButton
          onClick={handleSubmitPost}
          disabled={!postContent.trim() || isSubmitting}
        />
      </div>
    </Layout>
  );
};
