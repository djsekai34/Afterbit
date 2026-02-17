import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // En Vercel no hace falta el base del repo de GitHub
  base: '/', 
  plugins: [react(), tailwindcss()],
})