import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Image from './../Home/home.jpg'

function Home() {
  return (
    <div>
        <Navbar/>
        <div className='image-container'>
      <img src={Image} className='home-image'/>
      </div>
        <h1>Home</h1>
    </div>
  )
}

export default Home