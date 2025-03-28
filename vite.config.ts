import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    server:
      mode === "development"
        ? {
            proxy: {
              "/api": {
                target: "https://nest-profile-v2.vercel.app",
                changeOrigin: true,
                secure: true,
                // rewrite: (path) => path.replace(/^\/api/, ""),
              },
            },
          }
        : {
            proxy: {
              "/api": {
                rewrite: (path) => path.replace(/^\/api/, ""),
              },
            },
          },
  };
});
