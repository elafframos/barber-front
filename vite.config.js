import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Permite usar 'test', 'expect', 'describe' sem precisar importar em todo arquivo
    environment: 'jsdom',
    setupFiles: './src/setupTests.js', // Arquivo para carregar configurações globais
  },
})
