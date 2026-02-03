import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProfileNavbar.css";

export default function UserNavbar() {
  const navigate = useNavigate();
  
  // Check if user has a seller profile (using localStorage for demo)
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "buyer";
  });
  
  const [hasSellerProfile, setHasSellerProfile] = useState(() => {
    return localStorage.getItem("hasSellerProfile") === "true";
  });

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const dropdownRef = useRef(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Save mode to localStorage
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const handleModeToggle = () => {
    if (mode === "buyer") {
      // Switching to seller mode
      if (hasSellerProfile) {
        // User has seller profile, go to seller dashboard
        setMode("seller");
        navigate("/seller-dashboard");
      } else {
        // User doesn't have seller profile, go to create profile page
        navigate("/create-seller-profile");
      }
    } else {
      // Switching back to buyer mode
      setMode("buyer");
      navigate("/dashboard");
    }
  };

  const handleLogout = () => {
    // Clear localStorage and redirect to login
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("mode");
    localStorage.removeItem("hasSellerProfile");
    navigate("/login");
  };

  return (
    <nav className="user-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/dashboard">
            <span className="logo-icon">💎</span>
            <span className="logo-text">SkillConnect</span>
          </Link>
        </div>

        {/* Navigation Links */}
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
        </div>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          {/* Mode Toggle Button */}
          <button className="mode-toggle-btn" onClick={handleModeToggle}>
            <span className="toggle-icon">{mode === "buyer" ? "💼" : "🛒"}</span>
            <span className="toggle-text">
              Switch to {mode === "buyer" ? "Seller" : "Buyer"}
            </span>
          </button>

          {/* User Profile Dropdown */}
          <div className="profile-dropdown-wrapper" ref={dropdownRef}>
            <button 
              className="profile-btn"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <div className="profile-avatar">T</div>
              <span className="profile-name">Teju</span>
              <span className={`dropdown-arrow ${showProfileDropdown ? 'open' : ''}`}>▼</span>
            </button>

            {showProfileDropdown && (
              <div className="profile-dropdown">
                <Link to="/profile" className="dropdown-item" onClick={() => setShowProfileDropdown(false)}>
                  <span className="dropdown-icon">👤</span>
                  <span>Edit Profile</span>
                </Link>
                
                <Link to="/settings" className="dropdown-item" onClick={() => setShowProfileDropdown(false)}>
                  <span className="dropdown-icon">⚙️</span>
                  <span>Settings</span>
                </Link>
                
                <div className="dropdown-divider"></div>
                
                <button className="dropdown-item logout-item" onClick={handleLogout}>
                  <span className="dropdown-icon">🚪</span>
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}