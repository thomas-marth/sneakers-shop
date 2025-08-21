import styles from "./styles.module.css";
import FacebookIcon from "../../assets/icons/facebook.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.contacts}>
            <h3>Контакты</h3>
            <a href="tel:88000000000">8 800 000 00 00</a>
            <a href="mailto:email@example.com">email@example.com</a>
          </div>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook" className={styles.socialLink}>
              <img
                src={FacebookIcon}
                alt="Facebook icon"
                className={styles.icon}
              />
            </a>
            <a href="#" aria-label="Twitter" className={styles.socialLink}>
              <img
                src={TwitterIcon}
                alt="Twitter icon"
                className={styles.icon}
              />
            </a>
            <a href="#" aria-label="WhatsApp" className={styles.socialLink}>
              <img
                src={InstagramIcon}
                alt="Instagram icon"
                className={styles.icon}
              />
            </a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>2024 Сникер магазин. Все права защищены</p>
          <input
            name="email"
            type="email"
            placeholder="Введите свой email"
            autoComplete="email"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
