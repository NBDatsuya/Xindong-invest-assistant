import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:8099",
        changeOrigin: true,
        cookiePathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
