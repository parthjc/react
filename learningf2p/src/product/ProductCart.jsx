import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import "./product.css";

export const ProductCart = () => {
  const { sharedData } = useContext(ProductContext)
  console.log("shared Data in product cart ", sharedData);
  return (

    <div>ProductCart

      <div>
        <div className="container">
          {
            sharedData?.map((product) => {
              return (
                <div className="product">
                  <h1>{product.name}</h1>
                  <h2>{product.price}</h2>
                  <h3>{product.brand}</h3>
                  <img src={product.imageUrl} alt="" />

                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}