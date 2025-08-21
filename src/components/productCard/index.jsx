import { useState } from "react";
import styles from "./styles.module.css";
import BtnAdd from "../../assets/BtnAdd.png";
import BtnAddBlack from "../../assets/BtnAddBlack.png";

function ProductCard({ name, image, price }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(!added);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.price}>{price} ₽</p>

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
