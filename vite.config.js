import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// base relativa: funciona en GitHub Pages con cualquier nombre de repositorio
export default defineConfig({
  plugins: [react()],
  base: './',
})
