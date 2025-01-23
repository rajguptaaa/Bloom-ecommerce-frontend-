// import React, { useContext } from 'react'
// import './CartItems.css'
// import { ShopContext } from '../../Context/ShopContext'
// import remove_icon from '../Images/remove.png'
// export const CartItems = () => {
//   const {getTotalCartAmount,all_product,cartItems,removeFromCart,selectedModels}=useContext(ShopContext)
//   return (
//     <div className="cartitems">
//       <div className="format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Model</p>
//         <p>Remove</p>
//       </div>
//       <hr/>
      
//         {all_product.map((e)=>{
//           if(cartItems[e.id]>0){
//             return<div>
//             <div className="format format-main">
//               <img src={e.image} alt="" className='icon'/>
//               <p>{e.name}</p>
//               <p>Rs.{e.new_price}</p>
//               <button className='quantity'>{cartItems[e.id]}</button>
//               <p>Rs.{e.new_price*cartItems[e.id]}</p>
//               <p>{selectedModels[e.id] || 'Not selected'}</p>
            
//               <img className="imgg"src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
//             </div>
//             <hr/>
//             </div>
//           }
//           return null;
//         })}
//         <div className="cartitems-down">
//           <div className="cartitems-total">
//             <h1>Cart Totals</h1>
//             <div>
//               <div className="total-items">
//                 <p>Subtotal</p>
//                 <p>Rs.{getTotalCartAmount()}</p>
//               </div>
//               <hr/>
//               <div className="total-items">
//                 <p>Shipping Fee</p>
//                 <p>Free</p>
//               </div>
//               <hr/>
//               <div className="total-items">
//                 <h3>Total</h3>
//                 <h3>Rs.{getTotalCartAmount()}</h3>
//               </div>
//             </div>
//             <button className='b1'>Proceed to checkout</button>
//           </div>
//           <div className="cartitems-promocode">
//             <p>If you have a promocode, Enter here</p>
//             <div className="cartitems-promobox">
//               <input type="text" placeholder='Enter Promocode'/>
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>

//       </div>

//   )
// }


import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Images/remove.png'
export const CartItems = () => {
  const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className="cartitems">
      <div className="format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      
        {all_product.map((e)=>{
          if(cartItems[e.id]>0){
            return<div>
            <div className="format format-main">
              <img src={e.image} alt="" className='icon'/>
              <p>{e.name}</p>
              <p>Rs.{e.new_price}</p>
              <button className='quantity'>{cartItems[e.id]}</button>
              <p>Rs.{e.new_price*cartItems[e.id]}</p>
            
              <img className="imgg"src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
            </div>
            <hr/>
            </div>
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="total-items">
                <p>Subtotal</p>
                <p>Rs.{getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="total-items">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr/>
              <div className="total-items">
                <h3>Total</h3>
                <h3>Rs.{getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className='b1'>Proceed to checkout</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promocode, Enter here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder='Enter Promocode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>

      </div>

  )
}
