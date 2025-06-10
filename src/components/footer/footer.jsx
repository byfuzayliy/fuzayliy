import { Link } from "react-router-dom";
import { FaTelegram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../../assets/images/download.svg";

import "./footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main ">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Azizbek's Logo" width="60" height="60" />
              <h2 className="logo-text">Azizbek</h2>
            </Link>
            <p className="footer-tagline">
              Creating digital experiences that matter
            </p>
          </div>

          <div className="footer-links">
            <div className="links-column">
              <h3>Explore</h3>
              <Link to="/about">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/skills">Skills</Link>
            </div>
            <div className="links-column">
              <h3>Connect</h3>
              <Link to="/contact">Contact</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/testimonials">Testimonials</Link>
            </div>
          </div>

          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a
                href="https://t.me/byfuzayliy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram className="social-icon" />
              </a>
              <a
                href="https://youtube.com/byfuzayliy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube className="social-icon" />
              </a>
              <a
                href="https://linkedin.com/in/byfuzayliy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                href="https://github.com/byfuzayliy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Aziz Abduhakimov. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
