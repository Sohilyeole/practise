import { useState } from 'react'
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'

import './App.css'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

function App() {
const[signup,setsignup]=useState(true)
function setter(){
  setsignup(!signup)
}

  

  return (
    <>
    { signup &&(
      <Signup signup={setter}/>
    )
    }
    {
      !signup &&(
        <Login login={setter}/>
      )
    }
  
    
    </>
   
  )
}

export default App
