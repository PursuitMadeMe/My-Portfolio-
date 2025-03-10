import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: ".", // Root folder
  publicDir: "public", // Ensures Netlify finds _redirects
  build: {
    rollupOptions: {
      input: {
        main: "index copy.html", // This must match your file name
      },
    },
    outDir: "dist", // Output directory for Netlify
  },
});
