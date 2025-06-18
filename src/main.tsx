import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h2 className='text-3xl font-bold underline text-red-500'>Hello World</h2>
  </StrictMode>
)
