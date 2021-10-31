import React, { useState } from 'react';
import '../styles/ProductItem.scss';
import addToCard from'@icons/bt_add_to_cart.svg';
const ProductItem = ({product}) => {

  const [card, setCard]= useState([]);

  const handleCard = ()=>{
    setCard([])
  }
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>$ {product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={handleCard}>
          <img src={addToCard} alt="addToCard" />
        </figure>
        
      </div>
    </div>
  );
};

export default ProductItem;