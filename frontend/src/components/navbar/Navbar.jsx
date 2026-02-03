import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  const isActive = (path) =>
    location.pathname === path ? "active" : "";

  const scrollToAbout = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = search.trim();
    if (!q) return;
    navigate(`/browse-services?query=${encodeURIComponent(q)}`);
    setSearch("");
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

        {/* Desktop Nav */}
        <ul className="nav-links">
          <li><Link to="/" className={isActive("/")}>Home</Link></li>

          <li>
            <button onClick={scrollToAbout} className="nav-about-link">
              About
            </button>
          </li>

          <li><Link to="/dashboard" className={isActive("/dashboard")}>Dashboard</Link></li>

          <li>
            <form className="nav-search" onSubmit={handleSearchSubmit}>
              <input
                className="nav-search-input"
                placeholder="Browse Services"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search services"
              />
              <button type="submit" className="nav-search-btn">🔍</button>
            </form>
          </li>

          <li><Link to="/contact" className={isActive("/contact")}>Contact</Link></li>
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="post-btn">Register</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><button onClick={scrollToAbout}>About</button></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li>
            <form className="mobile-search" onSubmit={handleSearchSubmit}>
              <input placeholder="Browse Services" value={search} onChange={(e) => setSearch(e.target.value)} />
              <button type="submit">🔍</button>
            </form>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/register" className="post-btn">Register</Link>
        </div>
      </div>
    </>
  );
}
