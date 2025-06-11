import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import routify from "@roxi/routify/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  base: `/`, // <- This is the fix
  plugins: [
    tailwindcss(),
    routify({
      /* config */
    }),
    svelte(),
  ],
});
