// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://beniboy224.github.io',
  base: '/beniboy224.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});