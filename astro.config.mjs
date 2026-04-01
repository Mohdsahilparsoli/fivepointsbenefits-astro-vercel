// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // ✅ Correct import, no /server

export default defineConfig({
  site: 'http://localhost:4321',
  output: 'server',
  adapter: vercel(), // Works now
  trailingSlash: "ignore",

  integrations: [mdx(), sitemap()],
});