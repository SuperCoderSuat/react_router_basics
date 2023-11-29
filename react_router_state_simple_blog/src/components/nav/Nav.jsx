import { NavLink } from "react-router-dom";
import './Nav.css'
import Logo from "../logo/Logo";

const Nav = () => {
    return (
        <nav>
            <Logo />
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </nav>
    );
}

export default Nav;