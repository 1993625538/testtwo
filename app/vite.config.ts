import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path" 
export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'modules',
    outDir: 'dist', // 指定输出路径
    assetsDir: 'dist', // 指定生成静态资源的存放路径
    // minify: 'terser', // 混淆器,terser构建后文件体积更小
    sourcemap: false,
    terserOptions: {
      // 文件压缩选项
      compress: {
        drop_console: true, // 生产环境移除console
        drop_debugger: true // 生产环境移除debugger
      }
    },
    rollupOptions: {
      treeshake: false,
      // 分块打包
      output: {
        // 块文件名
        chunkFileNames: 'js/[name]-[hash].js',
        // 输入文件名
        entryFileNames: 'js/[name]-[hash].js',
        // 资产文件名
        assetFileNames: '[ext]/[name]-[hash].[ext]',
        // 分文件打包
        manualChunks (id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      }
    }
  },
  server: {
    host: "0.0.0.0",
    port: 80,
    proxy: {
      // 使用 proxy 实例
      '/api': {
        target: 'http://127.0.0.1:9001',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // Proxying websockets or socket.io
      '/socket.io': {
        target: 'ws://http://127.0.0.1:9001',
        ws: true,
        changeOrigin: true,
      }
    }
  },
  resolve: {
    // 定义别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  },
  // 配置css
  css: {
    // 预处理器选项
    preprocessorOptions: {
      // scss配置
      scss: {
        charset: false,
        additionalData: `@import "@/assets/scss/global.scss";`
      },
      // less配置
      less: {
        charset: false,
        additionalData: '@import "./src/assets/less/global.less";',
        javascriptEnabled: true,
      }
    },

  },


  // 引入第三方配置
  optimizeDeps: {
    include: []
  }
})



