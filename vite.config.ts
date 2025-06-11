import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import routify from "@roxi/routify/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  base: "/corychris.com/", // ← Matches your GitHub repo name
  plugins: [
    tailwindcss(),
    routify({
      /* config */
    }),
    svelte(),
  ],
});
