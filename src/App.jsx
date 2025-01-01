import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-blue-100">
      <h1 className="font-poppins font-bold text-red-900">
        Hello, Tailwind CSS!
      </h1>
      <p className="text-2xl font-poppins text-green-500" style={{ fontFamily: 'Poppins, sans-serif' }}> Test</p>
    </div>
    </>
  )
}

export default App
