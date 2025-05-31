import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/download.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [open, isOpen] = useState(false);

  const toggleMenu = () => {
    console.log(isOpen(!open));
  };
  return (
    <header>
      <div className="quotes">Never give up !</div>
      <nav className="navbar container">
        <Link className="logo" to="/">
          <img src={logo} alt="Portfolio website of Azizbek" width={80} />
        </Link>

        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>

          <li>
            <Link to="/">Skills</Link>
          </li>

          <li>
            <Link to="/">Projects</Link>
          </li>

          <li>
            <Link to="/">Others</Link>
          </li>

          <li>
            <Link to="/">Contact</Link>
          </li>

          <li>
            <Link className="login" to="login">
              Login
            </Link>
          </li>
        </ul>

        <button onClick={toggleMenu} className="menu-btn">
          <GiHamburgerMenu />
        </button>
      </nav>
    </header>
  );
};

export default Header;
