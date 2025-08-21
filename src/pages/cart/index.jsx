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
      <h1 className={styles.title}>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Здесь пока ничего нет</p>
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
