/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // eslint-disable-next-line no-undef
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      ui: `${path.resolve(__dirname, "./src/ui/")}`,
      cart: `${path.resolve(__dirname, "./src/features/cart")}`,
      menu: `${path.resolve(__dirname, "./src/features/menu")}`,
    },
  },
});
