import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./router/index.tsx";
import ToastProvider from "./components/Toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
    <ToastProvider />
  </StrictMode>
);
