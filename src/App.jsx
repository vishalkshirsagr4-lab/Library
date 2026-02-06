import React from 'react'
import'./App.css'
import { useState } from 'react'
import Login from './Login'
import collegelogo from './Imgs/collegelogo.png'
import Body from './Body'

const App = () => {

  const [state,setstate]=useState(true);

  return (
    <div className='main'>
         <div className="navbar">
          <div className='logo-sec'>
            <img className='logo-college' src={collegelogo} alt="logo" />
            <h2>KLE Library </h2>
          </div>
          <ol className='list'>
            <li className='anime'>About Us</li>
            <li className='anime'>Contact</li>
            <li className='anime'><button className='Login' onClick={()=>{setstate(!state)}}>{state?'Login':'Logout'}</button></li>
          </ol>
         </div>
         {state?<Login/>:<Body/>}
    </div>
  )
}

export default App