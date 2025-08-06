import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from "vite-plugin-imagemin";
import * as path from "path";

export default defineConfig({
  base: '/myCV/',
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      // Esto optimiza JPEG, PNG, SVG, GIF y genera WebP
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
      webp: {
        quality: 75,
      },
    }),
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
