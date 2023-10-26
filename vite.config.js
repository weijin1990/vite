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
  },
  server: {
    server: {
      proxy: {
        '/dev': {
          target: 'https://uzi7gnotaa.execute-api.ap-northeast-1.amazonaws.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev/, ''),
        },
        // '/': {
        //   target: 'http://localhost:8009',
        //   changeOrigin: true,
        //   rewrite: (path) => path,
        // },
      }
    }
  }
})