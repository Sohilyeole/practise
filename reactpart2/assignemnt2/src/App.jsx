import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
    <div className='display'><h1 >{count}</h1></div>
      <div className='btn_container'>
       
        <button onClick={ ()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(0)}>reset</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
      </div>
    </div>
    </>
  )
}

export default App
