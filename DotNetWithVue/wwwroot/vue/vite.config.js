import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  define: {
    process: {
      env: {

      }
    }
  },
  build: {
    outDir: '../lib/jtb-vue',
    assetsDir: '../lib/jtb-vue/assets',
    sourcemap: true,
    lib: {
      entry: ['src/main.js'],
      name: 'jtb-vue',
      fileName: (format, entryName) => `jtb-vue-${entryName}.${format}.js`,
      cssFileName: 'src/styles.css'
    },
    emptyOutDir: true,
  }
})
