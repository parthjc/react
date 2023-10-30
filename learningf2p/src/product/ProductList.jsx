import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import "./product.css";

export const ProductList = () => {

  const { products, addToCart } = useContext(ProductContext)

  return (
    <div>
      <div className="container">
        {
          products?.map((product) => {
            return (
              <div className="product">
                <h1>{product.name}</h1>
                <h2>{product.price}</h2>
                <h3>{product.brand}</h3>
                <img src={product.imageUrl} alt="" />
                <button className="btn btn-primary" onClick={() => { addToCart(product) }}>ADD TO CART</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};