import styles from "./styles.module.css";
import { useCart } from "../../context/cartContext";
import cartImg from "../../assets/icons/Vector.svg";

function CartCard({ product }) {
  const { removeFromCart } = useCart();

  return (
    <div className={styles.cartCard}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.imageCards}
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{product.name}</h3>
        <div className={styles.priceBlock}>
          <p className={styles.label}>Цена:</p>
          <p className={styles.value}>{product.price} €</p>
        </div>
      </div>

      <button
        onClick={() => removeFromCart(product.id)}
        className={styles.deleteButton}
      >
        <img src={cartImg} alt="DeleteIcon" />
      </button>
    </div>
  );
}

export default CartCard;
