import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import Linkedin from './cash-track-linkedin.png'
import Github from './cash-track-github.png'
import Peerlist from './cash-track-peerlist.png'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-card'>

      <div>
        <h1 className='footer-heading'>FEATURES</h1>
        <div className='footer-feature-container'>
        <p>Track all record</p>
        <p>Manage the daily expense</p>
        <p>User-friendly Interface</p>
        </div>
      </div>

      <div>
        <h1 className='footer-heading'>QUICK LINKS</h1>
        <div className='footer-link-container'>
        <p><Link to="/home" className='footer-links'>Home</Link> </p>
        <p><Link to="/" className='footer-links' >All transactions</Link> </p>
        <p><Link to="/addtransaction" className='footer-links' >Add </Link> </p>
        <p><Link to="/login"  className='footer-links'> Login</Link> </p>
        <p><Link to="/signup"  className='footer-links'>Signup</Link> </p>
      </div>
      </div>

      <div>
        <h1 className='footer-heading'>CONTACT US</h1>
        <div className='images-container'>
        <div>
        <p><Link to='https://github.com/mansidethe'><img src={Github} className='footer-image'/></Link></p>
        </div>

        <div>
        <p><Link to='https://www.linkedin.com/in/mansi-dethe-349909229/'><img src={Linkedin} className='footer-image'/></Link></p>
        </div>

        <div>
        <p><Link to='https://peerlist.io/mansidethe'><img src={Peerlist} className='footer-image'/></Link></p>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer