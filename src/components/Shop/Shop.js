import React, { useEffect, useState } from "react";
import { addCartToDB, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);


  const [cart, setCart] = useState([]);

  const addToCartHandel = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
    addCartToDB(product.id);

  };

  // get shopping cart from local storage
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedCart[id];
        savedCart.push(addedProduct);
     }
    }
    setCart(savedCart);
  }, [products]);
  return (
    <div className='shop-container'>
      <div className='product-container'>
              {
                  products.map((product) => (
                      <Product
                          key={product.id}
                      product={product}
                      clickHandel={addToCartHandel}
                    >                        
                      </Product>
                  ))
              }
      </div>
      <div className="cart-container">
       <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
