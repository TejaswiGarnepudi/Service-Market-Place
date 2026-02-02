import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./ProfileNavbar.css";

export default function UserNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState("buyer");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dropdownRef = useRef(null);

  // ✅ Detect mode automatically based on current route
  useEffect(() => {
    if (location.pathname === "/create-seller-profile") {
      setMode("seller");
    } else {
      setMode("buyer");
    }
  }, [location.pathname]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔍 SEARCH FUNCTION
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/browse-services?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  // ✅ Simple Mode Toggle
  const handleModeToggle = () => {
    if (mode === "buyer") {
      navigate("/create-seller-profile");
    } else {
      navigate("/dashboard");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="user-navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <Link to={mode === "seller" ? "/create-seller-profile" : "/dashboard"}>
            <span className="logo-icon">💎</span>
            <span className="logo-text">SkillConnect</span>
          </Link>
        </div>

        {/* SEARCH + NAV LINKS */}
        <div className="navbar-links">
          <form onSubmit={handleSearch} className="dashboard-search-form">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="dashboard-search-input"
            />
          </form>

          <Link to="/orders" className="nav-link">
            <span className="nav-icon">📦</span>
            Orders
          </Link>

          <Link to="/messages" className="nav-link">
            <span className="nav-icon">💬</span>
            Messages
          </Link>

          <Link to="/notifications" className="nav-link notification-link">
            <span className="nav-icon">🔔</span>
          </Link>
        </div>

        {/* Right Side */}
        <div className="navbar-actions">

          {/* ✅ Toggle Button */}
          <button className="mode-toggle-btn" onClick={handleModeToggle}>
            <span className="toggle-icon">
              {mode === "buyer" ? "💼" : "🛒"}
            </span>
            <span className="toggle-text">
              Switch to {mode === "buyer" ? "Seller" : "Buyer"}
            </span>
          </button>

          {/* Profile Dropdown */}
          <div className="profile-dropdown-wrapper" ref={dropdownRef}>
            <button
              className="profile-btn"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <div className="profile-avatar">T</div>
              <span className="profile-name">Teju</span>
              <span
                className={`dropdown-arrow ${
                  showProfileDropdown ? "open" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {showProfileDropdown && (
              <div className="profile-dropdown">
                <Link
                  to="/profile"
                  className="dropdown-item"
                  onClick={() => setShowProfileDropdown(false)}
                >
                  <span className="dropdown-icon">👤</span>
                  <span>Edit Profile</span>
                </Link>

                <Link
                  to="/settings"
                  className="dropdown-item"
                  onClick={() => setShowProfileDropdown(false)}
                >
                  <span className="dropdown-icon">⚙️</span>
                  <span>Settings</span>
                </Link>

                <div className="dropdown-divider"></div>

                <button
                  className="dropdown-item logout-item"
                  onClick={handleLogout}
                >
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
