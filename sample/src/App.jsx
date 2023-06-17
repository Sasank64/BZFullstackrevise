import { useState } from 'react'
import './App.css'
import ApiData from './server'

function App() {
  const [count, setCount] = useState(0)

  

  return (
      <ApiData/>
  )
}

export default App
