import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import routify from "@roxi/routify/vite-plugin"; // Optional, remove if unused

export default defineConfig({
  base: "/corychris.com/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [
    tailwindcss(),
    routify({}), // Optional
    svelte(),
  ],
});
