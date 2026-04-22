import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jonnyc.dev',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
});
