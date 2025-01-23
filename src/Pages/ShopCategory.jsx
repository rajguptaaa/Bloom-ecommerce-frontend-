
import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { Item } from "../Components/Items/Item";


export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <>
    <div className="shop-category">
      {/* <div className="shop-left">
        <h2>Fresh & Real</h2>
        <p>Discount is ON</p>
        <div className="shop-text">
          <p>Customise Your own Bouquet</p>
          <p>
            Buy fresh and real flowers from Blooms & Blossoms at most affordable
            Prices and get discounts on all items.
          </p>
        </div>
      </div> */}

      <div className="hero-right">
        <img className='shopcategory-banner'src={props.banner} alt="" />
      </div>
      </div>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 24 products
        </p>

        <div className="shopcategory-sort">
          Sort by <img src="" alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
      </>
  );
};