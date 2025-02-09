import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../Components/Breadcrumbs/Breadcrumbs';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';

export const Product = () => {
  const {all_product}=useContext(ShopContext);
  const{productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));


  return (
    <>
    <Breadcrumbs product={product}/>
    <ProductDisplay product={product}/>
    </>
  )
}
