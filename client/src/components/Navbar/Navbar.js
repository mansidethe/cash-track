import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from './../Navbar/cashtrack-logo.png'

function Navbar() {
    const [user, setUser] = useState({});

    useEffect(()=>{
        const storgeUser = JSON.parse(localStorage.getItem("user") || '{}');
        setUser(storgeUser);
    },[])
  return (

    <div className='navbar'>
        <Link to ='/home'><img src={logo}  className='navbar-brand'/></Link>

        <div className='navbar-links'>
        <Link to ='/' className='navbar-link'>Transaction</Link>

        <Link to ='/AddTransaction' className='navbar-link'>Add</Link>

        <Link to ='/login' className='navbar-link'>Login</Link>

        <Link to ='/signup' className='navbar-link'>Signup</Link>
        </div>

        <div className='hello-user-text'>
  Hello, {user.name|| 'User!'}
  {
    user.name?(
        <span className='navbar-logout' onClick={()=>{
            localStorage.removeItem('user');
            window.location.href='/login';

        }}>Logout</span>
    )
    :null
  }
</div>
 </div>

  )
}

export default Navbar