import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import vuePlugin from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vuePlugin(), tailwindcss()],
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
