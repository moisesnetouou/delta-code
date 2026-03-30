"use client";

import { Toaster } from "sonner";

export function ToasterProvider() {
  return (
    <Toaster
      position="top-left"
      richColors
      toastOptions={{
        style: {
          background: "#1a1a24",
          border: "1px solid #2a2a35",
          color: "#f0f0f5",
        },
      }}
    />
  );
}
