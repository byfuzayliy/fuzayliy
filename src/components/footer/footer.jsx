import { Link } from "react-router-dom";
import "./footer.scss";
import { FaTelegram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

import logo from "../../assets/images/download.svg";
const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <div>
          <Link to="/" className="footer-logo">
            <img src={logo} alt="" />
            <h2>Fuzayliy</h2>
          </Link>
        </div>
        <div className="social-icons">
          <a
            href="https://t.me/byfuzayliy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
          <a
            href="https://youtube.com/byfuzayliy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com/in/byfuzayliy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/byfuzayliy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="footer-top">
        © 2025 Aziz Abduhakimov. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
