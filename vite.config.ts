import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./public/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
