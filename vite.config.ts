import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

const routerOptions: Parameters<typeof tanstackRouter>[0] = {
  autoCodeSplitting: true,
  generatedRouteTree: 'src/app/routeTree.gen.ts',
  routesDirectory: 'src/app/routes',
  target: 'react',
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter(routerOptions),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
