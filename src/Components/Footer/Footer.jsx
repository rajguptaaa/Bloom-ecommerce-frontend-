import React from 'react'
import './Footer.css'
import whatsapp from '../Images/whatsapp.png'
import instagram from '../Images/instagram.png'
import logo from '../Images/2.png'
export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={logo} alt=''/>
        <p>Blooms & Blossoms</p>
      </div>
      <ul className="footer-links">
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-icons">
        <div className="footer-container">
        <img src={instagram} alt=''/>  Instagram
        </div>
        <div className="footer-container">
        <img src={whatsapp} alt=''/> Whatsapp
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Right are Reserved.</p>
      </div>
    </div>
  )
}
