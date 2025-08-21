/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import axios from "axios";

export const BASE_URL = "https://68808f35f1dcae717b62808d.mockapi.io";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (item) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/Products/${item.id}`);
      if (data.quantity > 0) {
        await axios.put(`${BASE_URL}/Products/${item.id}`, {
          ...data,
          quantity: data.quantity - 1,
        });
        setCartItems((prev) => [...prev, item]);
      } else {
        console.log("Товара нет в наличии");
      }
    } catch (error) {
      console.log("Ошибка добавления товара в корзину:", error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/Products/${id}`);

      await axios.put(`${BASE_URL}/Products/${id}`, {
        ...data,
        quantity: data.quantity + 1,
      });

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
