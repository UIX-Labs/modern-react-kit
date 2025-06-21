import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { routeTree } from '~app/routeTree.gen'

import './index.css'

// Set up a QueryClient instance
const queryClient = new QueryClient()

// Set up a Router instance
const router = createRouter({
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  routeTree,
  scrollRestoration: true,
})

// Register router for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element not found')
}

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      {/* Devtools */}
      <TanStackRouterDevtools router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
