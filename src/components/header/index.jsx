import { NavLink } from "react-router";
import styles from "./styles.module.css";

const menuList = [
  {
    title: "Главная",
    path: "/",
  },
  { title: "Корзина", path: "/cart" },
  {
    title: "Контакты",
    path: "/contacts",
  },
];

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Сникер - магазин</h1>
        <nav>
          {menuList.map((menuItem) => {
            return (
              <NavLink key={menuItem.title} to={menuItem.path}>
                {menuItem.title}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Header;
