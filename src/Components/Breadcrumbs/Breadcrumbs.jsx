import React from 'react'
import './Breadcrumbs.css'
import arrow from '../Images/arrow2.png';
export const Breadcrumbs = (props) => {
  const {product}=props;
  return (
    <div className='breadcrumbs'>
      HOME <img src={arrow} alt="" />SHOP <img src={arrow} alt="" /> Item <img src={arrow} alt="" />{product.name} 

    </div>
  )
}
