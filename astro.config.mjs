import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://irvinggaona124-code.github.io',
  base: '/autohub-directory',
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  output: 'static',
  build: {
    format: 'directory',
  },
});
