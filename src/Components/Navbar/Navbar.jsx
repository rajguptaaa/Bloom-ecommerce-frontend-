import React,{useContext, useState} from 'react'
import './Navbar.css';
import logo from '../Images/2.png'
import cart from '../Images/cart.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar=() =>{
  const [menu,setMenu]=useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=''/>
        <p>Blooms & Blossoms</p>
       

      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("keypad")}}><Link style={{textDecoration:'none'}} to='/keypad'>Gifts</Link>{menu==="keypad"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mousepad")}}><Link style={{textDecoration:'none'}} to='/mousepad'>Puja</Link>{menu==="mousepad"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("laptop")}}><Link style={{textDecoration:'none'}} to='/laptop'>Decorations</Link>{menu==="laptop"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-cart">
        <Link to="/login"> <button>
          Login
        </button></Link>
       <Link to='/cart'>  <img src={cart} alt=''/></Link>
      
        <div className="nav-cart-count">
          {getTotalCartItems()}

        </div>
      </div>




    </div>
  )
}

export default Navbar

