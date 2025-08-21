import styles from "./styles.module.css";

function ProductCard({ name, image, price }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.price}>{price} ₽</p>
    </div>
  );
}

export default ProductCard;