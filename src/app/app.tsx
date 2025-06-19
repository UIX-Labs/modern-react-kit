import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools' 
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { routeTree } from '@/app/routeTree.gen'

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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />

      {/* Devtools */}
      <TanStackRouterDevtools router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
} 

export default App
