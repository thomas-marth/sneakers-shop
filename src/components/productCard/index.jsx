import { useState, useEffect } from "react";
import { useCart } from "../../context/cartContext";
import styles from "./styles.module.css";
import BtnAdd from "../../assets/BtnAdd.png";
import BtnAddBlack from "../../assets/BtnAddBlack.png";

function ProductCard({ id, name, image, price }) {
  const { addToCart, cartItems } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setAdded(cartItems.some((item) => item.id === id));
  }, [cartItems, id]);

  const handleClick = () => {
    addToCart({ id, name, image, price });
    setAdded(true);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.priceWrapper}>
        <p className={styles.price}>
          Цена: <br />
          <span className={styles.priceLable}>{price} €</span>
        </p>
        <img
          src={added ? BtnAddBlack : BtnAdd}
          alt="cart button"
          className={styles.iconButton}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default ProductCard;
