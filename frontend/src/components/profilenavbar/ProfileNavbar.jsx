import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProfileNavbar.css";

export default function UserNavbar() {
  const navigate = useNavigate();

  const [mode, setMode] = useState(() => localStorage.getItem("mode") || "buyer");
  const [hasSellerProfile] = useState(() => localStorage.getItem("hasSellerProfile") === "true");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const handleModeToggle = () => {
    if (mode === "buyer") {
      if (hasSellerProfile) {
        setMode("seller");
        navigate("/seller-dashboard");
      } else {
        navigate("/create-seller-profile");
      }
    } else {
      setMode("buyer");
      navigate("/dashboard");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="user-navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <div className="navbar-logo">
          <Link to="/dashboard">
            <span className="logo-icon">💎</span>
            <span className="logo-text">SkillConnect</span>
          </Link>
        </div>

        {/* NAV LINKS */}
        <div className="navbar-links">
          <Link to="/browse-services" className="nav-link">
            <span className="nav-icon">🔍</span>
            Browse Services
          </Link>

          <Link to="/orders" className="nav-link">
            <span className="nav-icon">📦</span>
            Orders
          </Link>

          <Link to="/messages" className="nav-link">
            <span className="nav-icon">💬</span>
            Messages
          </Link>

          {/* 🔔 NOTIFICATIONS */}
          <Link to="/notifications" className="nav-link notification-link">
            <span className="nav-icon">🔔</span>
            Notifications
            <span className="notification-badge">4</span>
          </Link>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">

          {/* MODE TOGGLE */}
          <button className="mode-toggle-btn" onClick={handleModeToggle}>
            <span className="toggle-icon">{mode === "buyer" ? "💼" : "🛒"}</span>
            <span className="toggle-text">
              Switch to {mode === "buyer" ? "Seller" : "Buyer"}
            </span>
          </button>

          {/* PROFILE DROPDOWN */}
          <div className="profile-dropdown-wrapper" ref={dropdownRef}>
            <button
              className="profile-btn"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <div className="profile-avatar">T</div>
              <span className="profile-name">Teju</span>
              <span className={`dropdown-arrow ${showProfileDropdown ? "open" : ""}`}>▼</span>
            </button>

            {showProfileDropdown && (
              <div className="profile-dropdown">
                <Link to="/profile" className="dropdown-item">
                  <span className="dropdown-icon">👤</span> Edit Profile
                </Link>

                <Link to="/settings" className="dropdown-item">
                  <span className="dropdown-icon">⚙️</span> Settings
                </Link>

                <div className="dropdown-divider"></div>

                <button className="dropdown-item logout-item" onClick={handleLogout}>
                  <span className="dropdown-icon">🚪</span> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
