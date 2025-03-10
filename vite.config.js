import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
import { defineConfig } from 'vite';

export default defineConfig({
  root: ".", // Ensures Vite starts from the correct folder
  build: {
    rollupOptions: {
      input: {
        main: "index copy.html", // Tell Vite to use "index copy.html"
      },
    },
    outDir: "dist", // Output directory
  },
});


