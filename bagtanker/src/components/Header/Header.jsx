
import { NavLink } from 'react-router'
import  Logo2 from '../../assets/Logo2.svg'
import Navagation from '../../assets/Navigation.svg'

export function Header() {
    return (
        <header>
            <img src={Logo2} alt="Logo2" />

        <nav>
            <img src={Navagation} alt="Navigation"></img>
            <ul>
                <li>
                    <NavLink to="/">Forside</NavLink>
                </li>
                <li>
                    <NavLink to="/estates">Produkter</NavLink>
                </li>
                <li>
                    <NavLink to="/news">Nyheder</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Kontakt</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>

                
            </ul>
        </nav>
        </header>
    )
}
