import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

export const ShopingContext = createContext();

const ShoppingProvider = (props) => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    }
    
    const getCategories = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data);
    }

    getProducts();
    getCategories();
     
    
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <ShopingContext.Provider value={{products, categories, cart, addToCart,removeFromCart,emptyCart}}>
      {props.children}  
    </ShopingContext.Provider>
  );
}

export default ShoppingProvider;
