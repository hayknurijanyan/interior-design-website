import { Link } from "react-router-dom";
import logo from "./../../assets/icons/logo.svg";
import burgerMenu from "./../../assets/icons/burger-icon.svg";
import { NAV_ITEMS } from "../../data/navItems";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-left">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <img src={burgerMenu} className="burger-menu" alt="logo" />
      <ul className="navbar-right">
        {NAV_ITEMS.map(({ id, link, title }) => (
          <li key={id}>
            <Link to={link}>{title}</Link>
          </li>
        ))}
        <li>
          <button className="button">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
