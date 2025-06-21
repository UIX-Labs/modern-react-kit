import path from 'node:path'

import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { type AliasOptions, defineConfig } from 'vite'

const routerOptions: Parameters<typeof tanstackRouter>[0] = {
  autoCodeSplitting: true,
  generatedRouteTree: 'src/app/routeTree.gen.ts',
  routesDirectory: 'src/pages',
  target: 'react',
}

const alias: AliasOptions = {
  '~': path.resolve(__dirname, 'src'),
  '~app': path.resolve(__dirname, 'src/app'),
  '~entities': path.resolve(__dirname, 'src/entities'),
  '~features': path.resolve(__dirname, 'src/features'),
  '~pages': path.resolve(__dirname, 'src/pages'),
  '~shared': path.resolve(__dirname, 'src/shared'),
  '~widgets': path.resolve(__dirname, 'src/widgets'),
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [tanstackRouter(routerOptions), react(), tailwindcss()],
  resolve: {
    alias,
  },
})
