import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jonny.dev',
  output: 'static',
  integrations: [sitemap()],
});
