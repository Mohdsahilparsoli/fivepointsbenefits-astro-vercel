// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
 site: 'http://localhost:4321',

  output: 'server',

  // 🔥 ADD THIS
 trailingSlash: "ignore",

  integrations: [mdx(), sitemap()],
});