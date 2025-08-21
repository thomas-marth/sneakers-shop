import { useState } from "react";
import { useCart } from "../../context/cartContext";
import styles from "./styles.module.css";
import BtnAdd from "../../assets/BtnAdd.png";
import BtnAddBlack from "../../assets/BtnAddBlack.png";

function ProductCard({ id, name, image, price }) {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart({ id, name, image, price });
    setAdded(!added);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.price}>Price: {price} €</p>

      <img
        src={added ? BtnAddBlack : BtnAdd}
        alt="cart button"
        className={styles.iconButton}
        onClick={handleClick}
      />
    </div>
  );
}

export default ProductCard;
