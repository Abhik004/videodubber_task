import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Optional: specify file extensions for JSX
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
  }
})