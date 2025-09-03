/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // 👈 necesario
    globals: true, // describe/it/expect globales
    setupFiles: "./vitest.setup.ts", // 👈 tu setup con jest-dom
  },
});
