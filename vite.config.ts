import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // lascia così se usi dominio personalizzato (es. crinalirunning.it)
  plugins: [react()],
  build: {
    outDir: 'dist',       // dice a Vite dove mettere i file compilati
    emptyOutDir: true,    // pulisce la cartella prima di ricrearla
  },
})
