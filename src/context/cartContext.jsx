/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const BASE_URL = "https://6898bc99ddf05523e55fb2e9.mockapi.io";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/cartData`);
        setCartItems(data);
      } catch (error) {
        console.log("Ошибка загрузки корзины:", error);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/cartData`, item);
      setCartItems((prev) => [...prev, data]);
    } catch (error) {
      console.log("Ошибка добавления товара в корзину:", error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/cartData/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Ошибка удаления товара из корзины:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
