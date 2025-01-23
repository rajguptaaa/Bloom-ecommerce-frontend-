
// import React, { useContext, useState } from 'react';
// import './ProductDisplay.css';
// import star from '../Images/star_icon.png';
// import star_dull from '../Images/star_dull_icon.png';
// import { ShopContext } from '../../Context/ShopContext';

// export const ProductDisplay = (props) => {
//   const { product } = props;

//   const { addToCart, selectModel, selectedModels } = useContext(ShopContext);



//   return (
//     <>
//       <div className='productdisplay'>
//         <div className="left">
//           <div className="img-list">
//             <img src={product.image} alt="" />
//             <img src={product.image} alt="" />
//             <img src={product.image} alt="" />
//             <img src={product.image} alt="" />
//           </div>
//           <div className="display-img">
//             <img className="main" src={product.image} alt="" />
//           </div>
//         </div>
//         <div className="right">
//           <h1>{product.name}</h1>
//           <div className="right-img">
//             <img src={star} alt="" />
//             <img src={star} alt="" />
//             <img src={star} alt="" />
//             <img src={star} alt="" />
//             <img src={star_dull} alt="" />
//             <p>(122)</p>
//           </div>
//           <div className="prices">
//             <div className="oldprice">Rs.{product.old_price}</div>
//             <div className="newprice">Rs.{product.new_price}</div>
//           </div>
          
         
//           <div className="laptop-type">
//   <h1>Select your laptop model</h1>
//   <div className="size">
//     {['Apple', 'Dell', 'Hp', 'Lenovo', 'Asus'].map((model) => (
//       <div 
//         key={model} 
//         onClick={() => selectModel(product.id, model)}
//         className={selectedModels[product.id] === model ? 'selected' : ''}
//       >
//         {model}
//       </div>
//     ))}
//   </div>
// </div>

//           <button className='btn' onClick={() => { addToCart(product.id) }}>Add to cart</button>
//           <p className="category"><span>Tags:</span> Latest,Cool</p>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useContext } from 'react';
import './ProductDisplay.css';
import star from '../Images/star_icon.png';
import star_dull from '../Images/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, selectModel, selectedModels } = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="left">
        <div className="img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-img">
          <img className="main" src={product.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="right-img">
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>
        </div>
        <div className="prices">
          <div className="oldprice">Rs.{product.old_price}</div>
          <div className="newprice">Rs.{product.new_price}</div>
        </div>
        
        {/* <div className="laptop-type">
          <h1>Select your laptop model</h1>
          <div className="size">
            {['Apple', 'Dell', 'Hp', 'Lenovo', 'Asus'].map((model) => (
              <div 
                key={model} 
                onClick={() => selectModel(product.id, model)}
                className={selectedModels[product.id] === model ? 'selected' : ''}
              >
                {model}
              </div>
            ))}
          </div>
        </div> */}

        <button className='btn' onClick={() => { addToCart(product.id) }}>Add to cart</button>
        <p className="category"><span>Tags:</span> Fresh, Beautiful</p>
      </div>
    </div>
  );
};

