import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";  // if you have it

export default defineConfig({
  site: 'https://chiranjalitha.github.io',              // ← your GitHub username
  base: '/Portfolio/',                                 // ← exact repo name with slashes!
  integrations: [tailwind()],                          // keep if you have Tailwind
  // ... any other config
});