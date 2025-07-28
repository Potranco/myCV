import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import * as path from "path";

export default defineConfig({
  base: '/myCV/',
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.ts',
  },
})
