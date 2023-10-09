import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       addtionalData: `@import "@/styles/varibles.scss";`
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': '/src',
      find: './runtimeConfig',
      replacement: './runtimeConfig.browser', // ensures browser compatible version of AWS JS SDK is used
    }
  }
})