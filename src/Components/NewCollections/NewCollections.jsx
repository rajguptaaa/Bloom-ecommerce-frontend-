import React from 'react'
import './NewCollections.css'
import new_collections from '../Images/new-collection'
import { Item } from '../Items/Item'
export const NewCollections = () => {
  return (
    <div className='new-collections'>
      <center>
      <h1>
        Seasonal Variety
      </h1></center>
    <hr/>
    <div className="collections">
      {new_collections.map((item,i)=>{
        return <Item
        key={i} 
        id={item.id} 
        name={item.name} 
        image={item.image} 
        new_price={item.new_price} 
        old_price={item.old_price} 
        />
      })}
    </div>
    </div>
  )
}
