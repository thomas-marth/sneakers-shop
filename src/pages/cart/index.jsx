import styles from "./styles.module.css";
import { useCart } from "../../context/cartContext";
import CartCard from "../../components/cartCard";

function Cart() {
  const { cartItems } = useCart();
  console.log(cartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  return (
    <div className={styles.cart}>
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div>
            {cartItems.map((item) => (
              <CartCard key={item.id} product={item} />
            ))}
          </div>
          <div>Total price: {totalPrice.toLocaleString("eu-EU")} Eur</div>
        </>
      )}
    </div>
  );
}

export default Cart;
