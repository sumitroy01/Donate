import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // All API calls starting with /api will be proxied
      '/api': {
        target: 'http://localhost:5000', // your Node/Express backend
        changeOrigin: true,
      },
    },
  },
})
