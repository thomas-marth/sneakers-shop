/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import axios from "axios";

export const BASE_URL = "https://68808f35f1dcae717b62808d.mockapi.io";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // async function fetchCartItems() {
  //   try {
  //     const response = await axios.get(`${BASE_URL}/cartData`);
  //     setCartItems(response.data);
  //   } catch (error) {
  //     console.log("Error fetching cart items: ", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchCartItems();
  // }, []);

  const addToCart = async (item) => {
    try {
      const { data: product } = await axios.get(
        `${BASE_URL}/Products/${item.id}`
      );

      if (product.quantity > 0) {
        await axios.put(`${BASE_URL}/Products/${item.id}`, {
          ...product,
          quantity: product.quantity - 1,
        });

        setCartItems((prev) => [...prev, item]);
      } else {
        console.log("Товар закончился на складе");
      }
    } catch (error) {
      console.log("Ошибка при добавлении товара в корзину:", error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const { data: product } = await axios.get(`${BASE_URL}/Products/${id}`);

      await axios.put(`${BASE_URL}/Products/${id}`, {
        ...product,
        quantity: product.quantity + 1,
      });

      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Ошибка при удалении товара из корзины:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
