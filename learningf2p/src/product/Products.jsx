import React, { useContext, useState } from 'react';
import { ProductContext } from './ProductContext';
import { ProductList } from './ProductList';


export const Products = () => {


  var { sharedData, setsharedData } = useContext(ProductContext)
  console.log("shared Data in product ", sharedData);

  var [products, setproducts] = useState([
    {
      id: 1,
      name: "TV",
      brand: "Sony",
      price: 50000,
      imageUrl: "https://images.firstpost.com/wp-content/uploads/2021/11/OnePlus-TV-50-U1S-review.jpg",
    },
    {
      id: 2,
      name: "Mobile",
      brand: "Samsung",
      price: 20000,
      imageUrl: "https://assets.mspimages.in/gear/wp-content/uploads/2021/02/galaxy-s21-review1.jpg",
    },
    {
      id: 3,
      name: "Laptop",
      brand: "Dell",
      price: 25000,
      imageUrl: "https://cdn1.smartprix.com/rx-iXMi3TNHD-w1200-h1200/XMi3TNHD.jpg",
    },
  ]);
  var [cart, setcart] = useState([])

  const addToCart = (product) => {

    //console.log(product);
    setcart([...cart, product])
    console.log(cart);
    //sharedData = cart
    setsharedData(cart)

  }

  return (
    <div>
      <ProductContext.Provider value={{ products, addToCart }}>
        <ProductList></ProductList>
      </ProductContext.Provider>
    </div>
  )
}