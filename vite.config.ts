import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      common: "/src/common",
      sections: "/src/sections",
      styles: "/src/styles",
      assets: "/src/assets",
    },
  },
})
