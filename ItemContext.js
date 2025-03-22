import React, { createContext, useState, useEffect } from 'react';

const itemContext = createContext();

function CustomItemContext({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // useEffect to load all the products from the backend
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/api/products');
      const products = await response.json();
      setProducts(products);
    };

    fetchData();
  }, []);

  // Add item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Add the new product to the cart and update total price
      const updatedCart = [...prevCart, product];
      return updatedCart;
    });
  };

  // Remove item from the cart
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item._id !== product._id);
      return updatedCart;
    });
  };

  // Calculate the total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  // Number of items in the cart
  const itemsInCart = cart.length;

  return (
    <itemContext.Provider value={{ products, addToCart, removeFromCart, cart, totalPrice, itemsInCart }}>
      {children}
    </itemContext.Provider>
  );
}

export { itemContext };
export default CustomItemContext;
