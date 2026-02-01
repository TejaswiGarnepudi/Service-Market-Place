import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      window.location.href = "/#about";
      return;
    }

    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <Link to="/" className="logo-container">
          <span className="logo-icon">💎</span>
          <h2 className="logo">SkillConnect</h2>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
          </li>

          <li>
            <a href="#about" onClick={scrollToAbout} className="nav-about-link">
              About
            </a>
          </li>

          {/* ✅ NEW DASHBOARD LINK */}
          <li>
            <Link to="/dashboard" className={isActive("/dashboard")}>
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/browse-services"
              className={isActive("/browse-services")}
            >
              Browse Services
            </Link>
          </li>

          <li>
            <Link to="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/register" className="post-btn">
            Register
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
          </li>

          <li>
            <a href="#about" onClick={scrollToAbout} className="nav-about-link">
              About
            </a>
          </li>

          {/* ✅ DASHBOARD in Mobile */}
          <li>
            <Link to="/dashboard" className={isActive("/dashboard")}>
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/browse-services"
              className={isActive("/browse-services")}
            >
              Browse Services
            </Link>
          </li>

          <li>
            <Link to="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/register" className="post-btn">
            Register
          </Link>
        </div>
      </div>
    </>
  );
}
