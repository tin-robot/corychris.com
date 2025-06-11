import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import routify from "@roxi/routify/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    routify({
      /* config */
    }),
    svelte(),
  ],
});
