import React, { useState } from 'react'

const Login = () => {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');



    const handleSubmit=async()=>{
        e.preventDefault;
    }
  return (
    <div>
      <div>
        <div>
            <h1>Login</h1>
            <p>Enter credential s to access admin panel</p>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} type='email' required placeholder='enter email'/>
            </div>
            <div>
                <label>Password</label>
                <input onChange={(e)=>{setPassword(e.target.value)}} type='password' required placeholder='password'/>
                </div>
                <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
