import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://bokepbocilhijab.pages.dev',
  output: 'hybrid',
  adapter: cloudflare(),
});