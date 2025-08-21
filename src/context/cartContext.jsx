/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BASE_URL = "https://664623b951e227f23aadf146.mockapi.io";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  async function fetchCartItems() {
    try {
      const response = await axios.get(`${BASE_URL}/cartData`);
      setCartItems(response.data);
    } catch (error) {
      console.log("Error fetching cart items: ", error);
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const response = await axios.post(`${BASE_URL}/cartData`, item);
      setCartItems((prev) => [...prev, response.data]);
    } catch (error) {
      console.log("Error adding to cart:", error);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
