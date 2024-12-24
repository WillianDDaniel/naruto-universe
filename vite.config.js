import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  base: '/naruto-universe/',
  plugins: [vue(), Vuetify({ autoImport: true })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vuetify: ['vuetify'],
        },
      },
    },
  },
})
