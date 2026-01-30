import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setEmailError("");

    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // Custom email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Success
    alert("Logged in successfully!");
  };

  return (
    <div className="login-wrapper">
      {/* Left Image Section with Service Animations */}
      <div className="login-image">
        {/* Floating Service Icons */}
        <div className="service-cards">
          <div className="service-card">💼</div>
          <div className="service-card">🎨</div>
          <div className="service-card">💻</div>
          <div className="service-card">📱</div>
          <div className="service-card">✍️</div>
        </div>

        <div className="overlay">
          <h1>Welcome to ServiceHub</h1>
          <p>
            Connect with top-rated professionals for all your service needs.
            Fast, secure, and trusted by thousands worldwide.
          </p>

          {/* Service Stats */}
          <div className="service-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Freelancers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="login-form-section">
        <div className="login-box">
          <h2>Login</h2>
          <p>Please login to continue</p>

          <form onSubmit={handleLogin} noValidate>
            {/* Email */}
            <div className="input-group">
              <input
                type="text"
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
              />
              {emailError && <p className="error-text">{emailError}</p>}
            </div>

            {/* Password */}
            <div className="input-group">
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
            </div>

            <button type="submit">Login</button>
          </form>

          <div className="extra-links">
            <Link to="#">Forgot Password?</Link>
          </div>

          <p className="register-text">
            Don't have an account?
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
