import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/crinali/' : '/',
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
  build: {
    rollupOptions: {
      output: {
        manualChunks: { 'react-vendor': ['react', 'react-dom'] }
      }
    },
    minify: 'esbuild',
    cssMinify: true
  }
});
