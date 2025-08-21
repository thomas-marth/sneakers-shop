import { NavLink } from "react-router"
import styles from "./styles.module.css"

const menuList = [{
    title: "Main",
    path: "/",
},
{    title: "Cart",
     path: "/cart",
},
{
     title: "Contacts",
     path: "/contacts",
}
]

function Header() {
    return <header className={styles.header}>
        <h1>Сникер - магазин</h1>
        <nav>
        {menuList.map((menuItem) => {
            return<NavLink key={menuItem.title} to={menuItem.path}>{menuItem.title}</NavLink>
        })}
        </nav>
    </header>
}




export default Header