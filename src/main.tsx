import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import AppRouter from "./router/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#363636",
          color: "#fff",
        },
        success: {
          style: {
            background: "#10B981",
          },
        },
        error: {
          style: {
            background: "#EF4444",
          },
        },
      }}
    />
  </StrictMode>
);
