// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://beniboy224.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});