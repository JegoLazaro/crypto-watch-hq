import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-white underline bg-slate-950'>
        HELLO WORLD
      </div>
    </>
  )
}

export default App
