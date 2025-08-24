import styles from "./styles.module.css";
import { useCart } from "../../context/cartContext";
import CartCard from "../../components/cartCard";

function Cart() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Корзина</h1>

      {cartItems.length === 0 ? (
        <p>Здесь пока ничего нет.</p>
      ) : (
        <div className={styles.cartContainer}>
          <div className={styles.cartList}>
            {cartItems.map((item) => (
              <CartCard key={item.id} product={item} />
            ))}
          </div>
          <div className={styles.summContainer}>
            <h3 className={styles.summTitle}>Итого</h3>
            <ul className={styles.summList}>
              {cartItems.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <p className={styles.totalPriceTitle}>Цена:</p>
            <p className={styles.totalPrice}>
              {totalPrice.toLocaleString("eu-EU")} €
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
