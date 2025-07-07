import mdx from '@mdx-js/rollup';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    port: 3000,
  },

  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    UnoCSS(),
    mdx({
      // MDX options
      remarkPlugins: [],
      rehypePlugins: [],
    }),
    tanstackStart({
      target: 'netlify',
    }),
  ],
});
