import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    plugins: [react(), tailwindcss()],
    server:
      mode === "development"
        ? {
            proxy: {
              "/api": {
                target: "http://localhost:5000",
                changeOrigin: true,
                secure: true,
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
