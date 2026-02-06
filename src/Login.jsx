import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="login">
         
         <div className='box'>
            <div>
                <label htmlFor="">User Name :</label>  <br /> <br />
                <input type="text" placeholder='Enter your User Name ' /> 
            </div>
            <div>
                 <label htmlFor="">Enter your Password :</label>  <br /> <br />
                <input type="text" placeholder='Enter Your Password' /> 
            </div>
            <div className='buttons'>
              <button className='submit'>Submit</button> <br />
              <button className='forget'><a href="">Forget Password ?</a></button>
            </div>
         </div>
 

    </div>
  )
}

export default Login