import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer'

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPssword] = useState('');


  const login = async () => {
    const response = await axios.post('/api/login', {
      email: email,
      password: password
    });

    alert(response?.data?.message);

    if (response?.data?.success) {
      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      window.location.href = "/home";
    }

  };

  useEffect(() => {
    const storgeUser = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(storgeUser);

    
    if(storgeUser?.email){
      alert('you are already logged in')
      window.location.href='/'
    }

  }, [])

  return (
    <div>
      <Navbar />
      <form className="login-form">
        <h1 className='text-center'>Login</h1>

        <div>
          <label htmlFor='email'>Email :</label>
          <input type='text'
            className='form-control'
            id='email'
            placeholder='Enter your email'
            value={email} onChange={(e) => {
              setEmail(e.target.value);
            }} />
        </div>

        <div>
          <label htmlFor='password'>Password :</label>
          <input type='password'
            className='form-control'
            id='password'
            placeholder='Enter your password'
            value={password} onChange={(e) => {
              setPssword(e.target.value);
            }} />
        </div>

        <button type='button' className='btn login-btn' onClick={login}>Login</button>

        <p className="text-right">
          <Link to="/signup">Create a new account</Link>
        </p>
</form>
<Footer/>
    </div>
  )
}

export default Login