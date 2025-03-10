import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: ".", // Ensures Vite starts from the correct folder
  publicDir: "public", // Ensure Netlify sees the _redirects file
  build: {
    rollupOptions: {
      input: {
        main: "index copy.html", // Tell Vite to use "index copy.html"
      },
    },
    outDir: "dist", // Output directory
  },
});
console.log('Vite configuration loaded');