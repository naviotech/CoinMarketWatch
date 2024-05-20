import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: './src',  
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html'),  
    },
    outDir: '../dist'  
  }
})
