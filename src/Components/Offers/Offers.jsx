import React from 'react'
import './Offers.css'
import exclusive from '../Images/pinky.png'
import { useNavigate } from 'react-router-dom'
export const Offers = () => {
  const navigate=useNavigate();
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Get 50% OFF</h1>
        <h4>upto Rs. 100 T&C applies</h4>
        <p>ON BEST Selling PRODUCTS</p>
        <button onClick={() => navigate('/keypad')}>Check Now</button>

      </div>
      <div className="offers-right">
        <img src={exclusive} alt=''/>

      </div>
    </div>
  )
}
