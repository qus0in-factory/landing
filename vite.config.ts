import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import { googleAnalytics } from "./scripts/analytics.ts";
import { structuredData } from "./scripts/structured-data.ts";

export default defineConfig({
  plugins: [react(), tailwindcss(), googleAnalytics(), structuredData()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});
