// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import compress from '@playform/compress';
import netlify from '@astrojs/netlify';

export default defineConfig({
  // ✅ Correct live domain (IMPORTANT for SEO + sitemap)
  site: 'https://fivepointsbenefits-astro-vercel.vercel.app/',
output: 'server',
  adapter: netlify(),
  trailingSlash: 'ignore',

  integrations: [
    mdx(),
    sitemap(),

    // ✅ Compression (performance boost)
    compress({
      HTML: true,
      CSS: true,
      JavaScript: true,
      Image: false, // images Astro handle karega
    }),
  ],

  // ✅ Image Optimization (WordPress images included)
  image: {
    domains: [
      "web.ogrelogicsolutions.com", // ✅ tumhara WP + project domain
    ],
    formats: ["avif", "webp"], // ✅ best performance
  },

  build: {
    inlineStylesheets: 'auto', // ✅ critical CSS inline
  },

  vite: {
    build: {
      cssCodeSplit: true, // ✅ CSS optimize
    },
  },
});