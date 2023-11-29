import { NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <NavLink to='/'>Speisekarte</NavLink>
            <NavLink to='/contact'>Kontakt</NavLink>
            <NavLink to='/opening_hours'>Öffnungszeiten</NavLink>
            <NavLink to='/gallery'>Galerie</NavLink>
        </nav>
    );
}

export default Nav;