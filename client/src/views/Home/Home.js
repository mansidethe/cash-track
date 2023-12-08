import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import image from './tracker.png'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='image-container'>

        <div  className='home'>
          <div>
            <img src={image} className='image'/>
          </div>

          <div className='text-cash'>
            <span className='home-text'>Cash tracking is a process<br/> that helps businesses<br/> keep track of the money that<br/> comes in and goes out of <br/>their store.</span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home