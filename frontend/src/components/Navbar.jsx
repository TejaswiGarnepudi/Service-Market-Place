import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">ServiceHub</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-actions">
        <Link to="/login">Login</Link>
        <Link to="/register" className="post-btn">Post a Service</Link>
      </div>
    </nav>
  );
}
