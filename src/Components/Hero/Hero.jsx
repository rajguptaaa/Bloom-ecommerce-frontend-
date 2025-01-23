import React from 'react'
import './Hero.css'
import hero_image from '../Images/redrose.jpg'
import arrow from '../Images/Arrow.png'
import { useNavigate } from 'react-router-dom'
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Fresh & Real </h2>
      <div>
      <p><span style={{color:"red"}}>|</span>All Variety</p>
      <p>for every purpose...</p>
      </div>
      <div className="hero-button"onClick={() => navigate('/new-collections')} >
        <div>Seasonal Flowers</div>
        <img src={arrow} alt=''/>

      </div>
      </div>
      <div className="hero-right">
      <img src={hero_image} alt=''/>
        

      </div>



    </div>
  )
}
