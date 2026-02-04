import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";  // keep if you have this line

export default defineConfig({
  site: 'https://chiranjalitha.github.io',
  base: '/Portfolio/',  // ← exact repo name with slashes! Case-sensitive
  trailingSlash: 'always',  // optional but helps consistency
  integrations: [tailwind()],  // keep your Tailwind integration
  // ... any other config you have
});