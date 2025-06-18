import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <h2 className='text-3xl font-bold underline text-red-500'>
      Hello World 
      {' '}
      {count}
      <button type='button' onClick={handleClick}>
        Click me
      </button>
    </h2>
  )
} 

export default App
