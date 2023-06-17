import { useState } from 'react'
import Name from './name'
import './App.css'
import NameFlag from './Nameflag'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <b>Country List</b>
    <Name/>
    <b>Countries and Flags</b>
    <NameFlag/> 
      </>
  )
}

export default App;
