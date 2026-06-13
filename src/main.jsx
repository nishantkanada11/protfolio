import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";

import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
        <Toaster
  position="top-right"
  toastOptions={{
    duration: 3000,
  }}
/>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);