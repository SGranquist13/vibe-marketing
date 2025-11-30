import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: use repo name as base path
  // For root domain, set BASE_PATH environment variable to empty string
  base: process.env.BASE_PATH === '' ? '/' : (process.env.BASE_PATH ? `/${process.env.BASE_PATH}/` : '/'),
})
