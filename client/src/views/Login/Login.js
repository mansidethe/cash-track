import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPssword] = useState('');
  

  const login = async () => {
    const response= await axios.post('/api/login',{
    email:email,
    password:password
  });
alert(response?.data?.message);

  if(response?.data?.success){
  localStorage.setItem("user", JSON.stringify(response?.data?.data));
  window.location.href="/";
  }
  
  };

  useEffect(()=>{
    const storgeUser = JSON.parse(localStorage.getItem('user')||'{}');
    console.log(storgeUser);

    
  },[])

  return (
    <div>
      
      <form className="login-form">
        <h1 >Login</h1>

        <div>
          <label htmlFor='email'>Email :</label>
          <input type='text'
           id='email'
            placeholder='Enter your email'
            value={email} onChange={(e) => {
              setEmail(e.target.value);
            }} />
        </div>

        <div>
          <label htmlFor='password'>Password :</label>
          <input type='password'
            id='password'
            placeholder='Enter your password'
            value={password} onChange={(e) => {
              setPssword(e.target.value);
            }} />
        </div>

        <button type='button' className=' login-btn'onClick={login}>Login</button>
       </form>
    </div>
  )
}

export default Login