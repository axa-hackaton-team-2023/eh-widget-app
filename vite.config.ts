import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({include: "**/*.tsx",}),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        './Button': './src/components/Button/Button',
        './Widget': './src/components/Widget/Widget'
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  base: '/eh-widget-app/',
  // FOR DEV ENV
  // server: {
  //   proxy: {
  //     "^/local-proxy/propositions": {
  //       target: 'https://axa-api-platform.eh.dev.app.fioneer.com/api/v1',
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/local-proxy/, ""),
  //     },
  //   },
  // },
})
