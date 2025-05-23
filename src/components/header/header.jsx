import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/download.svg";
const Header = () => {
  return (
    <header>
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
      </nav>
    </header>
  );
};

export default Header;
