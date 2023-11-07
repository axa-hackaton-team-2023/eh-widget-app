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
  base: '/eh-widget-app/'
})
