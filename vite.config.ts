// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
    },
  },
});
