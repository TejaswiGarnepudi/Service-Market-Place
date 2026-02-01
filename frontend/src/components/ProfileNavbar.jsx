import "./ProfileNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProfileNavbar() {
  const navigate = useNavigate();

  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "buyer";
  });

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const handleModeChange = () => {
    const newMode = mode === "buyer" ? "seller" : "buyer";
    setMode(newMode);
    if (newMode === "seller") {
      navigate("/seller-profile");
    } else {
      navigate("/profile");
    }
  };

  return (
    <div className="profile-navbar">
      <div className="profile-logo">
        <Link to="/">SkillConnect</Link>
      </div>

      <div className="profile-nav-links">
        <Link to="/browse-services" className="nav-link">Browse Services</Link>
        <Link to="/orders" className="nav-link">Orders</Link>
        <Link to="/messages" className="nav-link">Messages</Link>
      </div>

      <div className="profile-mode-switch">
        <button onClick={handleModeChange}>
          Switch to {mode === "buyer" ? "Seller" : "Buyer"} Mode
        </button>
      </div>
    </div>
  );
}
