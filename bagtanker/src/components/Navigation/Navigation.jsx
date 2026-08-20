import { NavLink } from "react-router"
import styles from './Navigation.module.scss'


export function Navigation() {
    return  (
        <nav className={styles.navStyle}>
            <ul>
                <li>
                    <NavLink to="/">Runstykker</NavLink>
                </li>
                <li>
                    <NavLink to="/">Baguettes</NavLink>
                </li>
                <li>
                    <NavLink to="/">Franskbrød</NavLink>
                </li>
                <li>
                    <NavLink to="/">Kager</NavLink>
                </li>
                <li>
                    <NavLink to="/">Rugbrød</NavLink>
                </li>

                
            </ul>
        </nav>

    )
}