import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Banner from "../../assets/Banner.png";
import ProductCard from "../../components/productCard";
import { BASE_URL } from "../../context/cartContext";

function Main() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/Products`);

      setProducts(data);
    } catch (error) {
      console.log("Ошибка загрузки товаров:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className={styles.main}>
      <img src={Banner} alt="Banner" className={styles.banner} />
      <h1>Товары</h1>
      <div className={styles.productsGrid}>
        {products.map(({ id, name, image, price }) => (
          <ProductCard
            key={id}
            id={id}
            name={name}
            image={image}
            price={price}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
