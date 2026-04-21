import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bottlerocketjonny.github.io',
  base: '/jonny-dev',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
});
