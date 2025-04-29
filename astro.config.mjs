import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
});

export const SITE = {
  title: "Sommr Solutions",
  description: "Affordable solutions for your business",
  // …favicon, base URL, etc.
};
