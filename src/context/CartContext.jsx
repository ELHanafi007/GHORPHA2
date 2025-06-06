// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Create the context itself
const CartContext = createContext();

// 2. Create a custom hook to make it easy to use the context in other components
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Create the Provider component that will wrap our entire app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // This state holds the products in the cart

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if the item is already in the cart
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        // For now, we'll just alert the user. Later we can add quantity.
        alert(`${product.name} is already in the cart.`);
        return prevItems;
      }
      // If not, add the new product
      return [...prevItems, { ...product, quantity: 1 }];
    });
    console.log(`${product.name} added to cart!`);
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // We can add more functions later, like updating quantity or clearing the cart

  // The value object holds all the state and functions we want to make available globally
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    cartCount: cartItems.length, // A simple count of unique items in the cart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};