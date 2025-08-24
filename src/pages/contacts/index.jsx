import ContactForm from "../../components/contactForm";
import styles from "./styles.module.css";
import SnapchatIcon from "../../assets/icons/snapchat.svg";
import FbIcon from "../../assets/icons/fb.svg";
import XIcon from "../../assets/icons/x.svg";

function Contacts() {
  return (
    <div className={styles.contacts}>
      <h1 className={styles.title}>Контакты</h1>
      <ul className={styles.contactList}>
        <li>
          <a href="tel:88000000000">8 800 000 00 00</a>
        </li>
        <li>
          <a href="mailto:emailexample@gmail.com">emailexample@gmail.com</a>
        </li>
      </ul>
      <div className={styles.content}>
        <ContactForm />
        <div className={styles.socials}>
          <h3 className={styles.socialsTitle}>Найдите нас</h3>
          <div className={styles.icons}>
            <a href="#">
              <img src={SnapchatIcon} alt="Snapchat" />
            </a>
            <a href="#">
              <img src={FbIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img src={XIcon} alt="X" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
