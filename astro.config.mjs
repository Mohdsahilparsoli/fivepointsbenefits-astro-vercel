// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'http://localhost:4321',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
});