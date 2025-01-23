import React from 'react'
import './Popular.css'
import data_product from '../Images/data'
import { Item } from '../Items/Item'

export const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN GIFTS</h1>
      <hr/>
      <div className="popular-item">
        {data_product.map((item) => {
          return (
            <Item 
              key={item.id} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          );
        })}
      </div>
    </div>
  )
}
