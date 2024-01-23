import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-styled-components', { ssr: false, pure: true, displayName: true, fileName: true }]
        ]
      }
    })],
  server: {
    port: 8000
  },
  resolve: {
    alias: {
      components: '/src/components',
      theme: '/src/theme',
    }
  }
})
