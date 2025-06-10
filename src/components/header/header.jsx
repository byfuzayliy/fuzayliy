import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/download.svg";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${scrolled ? "scrolled" : ""}`}>
      <div className="quotes">Never give up!</div>
      <nav className="navbar container">
        <Link className="logo" to="/">
          <img src={logo} alt="Azizbek's Portfolio" width={80} />
        </Link>

        <ul className={`list ${open ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/others" onClick={() => setOpen(false)}>
              Others
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link className="login" to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          </li>
        </ul>

        <button onClick={toggleMenu} className="menu-btn" aria-label="Menu">
          {open ? <GiCrossMark /> : <GiHamburgerMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
