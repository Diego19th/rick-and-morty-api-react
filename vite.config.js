import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://didac19.github.io/rick-and-morty-api-react/",
  plugins: [react()],
});
