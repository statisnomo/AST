import { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  scrollY: number;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar = ({ scrollY, currentPage, setCurrentPage }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled] = useState(() => scrollY > 50);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "research", label: "Research & Innovation" },
    { id: "partnerships", label: "Collaborations" },
    { id: "careers", label: "Careers" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`navbar ${scrollY > 50 ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavClick("home")}>
          <span className="logo-text">Atharv SecureTech</span>
        </div>

        <div className={`nav-menu ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${currentPage === item.id ? "active" : ""}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
