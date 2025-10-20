import toast from "react-hot-toast";

// Toast utility functions
export const showToast = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  loading: (message: string) => toast.loading(message),
  dismiss: (toastId?: string) => toast.dismiss(toastId),
};

// Toast messages for different actions
export const TOAST_MESSAGES = {
  // Authentication
  LOGIN_REQUIRED: "Please log in to perform this action",

  // Post creation
  POST_CREATED: "Post created successfully!",
  POST_CREATE_ERROR: "Failed to create post. Please try again.",

  // Function not implemented
  FUNCTION_NOT_IMPLEMENTED: "Function not implemented",
} as const;

// Toast utility functions for specific actions
export const showActionToast = (
  action: keyof typeof TOAST_MESSAGES,
  isLoggedIn: boolean = true
) => {
  if (!isLoggedIn) {
    showToast.error(TOAST_MESSAGES.LOGIN_REQUIRED);
    return;
  }

  switch (action) {
    case "POST_CREATED":
      showToast.success(TOAST_MESSAGES.POST_CREATED);
      break;
    case "POST_CREATE_ERROR":
      showToast.error(TOAST_MESSAGES.POST_CREATE_ERROR);
      break;
    case "FUNCTION_NOT_IMPLEMENTED":
      showToast.error(TOAST_MESSAGES.FUNCTION_NOT_IMPLEMENTED);
      break;
  }
};
