import "./Footer.css";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer = ({ setCurrentPage }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h4>Atharv SecureTech</h4>
              <p>
                Research-driven cybersecurity and IoT solutions for a secure
                digital future.
              </p>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <button onClick={() => handleNavClick("home")}>Home</button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("about")}>About</button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("services")}>
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("research")}>
                    Research
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>More</h4>
              <ul>
                <li>
                  <button onClick={() => handleNavClick("partnerships")}>
                    Partnerships
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("careers")}>
                    Careers
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavClick("contact")}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact</h4>
              <p>Phone: +91-9550212579</p>
              <p>Email: atharvsecuretech@gmail.com</p>
              <p>Location: Hyderabad, India</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; {currentYear} Atharv SecureTech Pvt. Ltd. All rights
              reserved.
            </p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
