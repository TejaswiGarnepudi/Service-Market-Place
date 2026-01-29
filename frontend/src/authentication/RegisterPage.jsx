import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Register.css";

export default function RegisterPage() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const [emailError, setEmailError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [strengthLevel, setStrengthLevel] = useState(0);
  const [confirmError, setConfirmError] = useState("");
  const [termsError, setTermsError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    if (name === "email") setEmailError("");
    if (name === "confirmPassword") setConfirmError("");
    if (name === "terms") setTermsError("");

    // Enhanced Password strength logic
    if (name === "password") {
      let strength = 0;
      if (value.length >= 6) strength++;
      if (/[A-Z]/.test(value)) strength++;
      if (/[a-z]/.test(value)) strength++;
      if (/[0-9]/.test(value)) strength++;
      if (/[^A-Za-z0-9]/.test(value)) strength++;

      setStrengthLevel(strength);

      if (strength <= 2) setPasswordStrength("Weak");
      else if (strength <= 4) setPasswordStrength("Medium");
      else setPasswordStrength("Strong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setConfirmError("");
    setTermsError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setConfirmError("Passwords do not match");
      return;
    }

    // Terms validation
    if (!formData.terms) {
      setTermsError("You must accept Terms & Conditions");
      return;
    }

    console.log('Registration data:', formData);
    alert('Registration successful!');
  };

  const getStrengthClass = () => {
    if (passwordStrength === "Weak") return "strength-weak";
    if (passwordStrength === "Medium") return "strength-medium";
    return "strength-strong";
  };

  return (
    <div className="register-wrapper">

      {/* LEFT FORM SECTION */}
      <div className="register-form-section">
        <div className="register-box">

          <h2>Register</h2>
          <p>Create your account</p>

          <form onSubmit={handleSubmit} noValidate>
          {/* Username */}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
          />

          {/* Email */}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {emailError && <p className="error-text">{emailError}</p>}

          {/* Password */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
          {formData.password && (
            <div className={`password-strength ${getStrengthClass()}`}>
              <span>Password strength: {passwordStrength}</span>
              <div className="strength-indicator">
                {[1, 2, 3, 4, 5].map((level) => (
                  <div
                    key={level}
                    className={`strength-bar ${strengthLevel >= level ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
          />
          {confirmError && <p className="error-text">{confirmError}</p>}

          {/* Terms */}
          <div className="terms-row">
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="terms"
      checked={formData.terms}
      onChange={handleChange}
    />
    <span className="checkmark"></span>

    <span className="terms-text">
      I agree to the{" "}
      <a href="/terms" target="_blank" rel="noreferrer">
        Terms & Conditions
      </a>
    </span>
  </label>

  {termsError && <div className="error-text">{termsError}</div>}
</div>

          
          {/* Button */}
          <button type="submit">
            Register
          </button>
          </form>

          {/* Footer */}
          <div className="register-footer">
            Already have an account?
            <Link to="/login">Login</Link>
          </div>

        </div>
      </div>

      {/* RIGHT INFO SECTION WITH ANIMATIONS */}
      <div className="register-info">
        {/* Floating Service Categories */}
        <div className="service-categories">
          <div className="category-badge">
            <span>💼</span> Business
          </div>
          <div className="category-badge">
            <span>🎨</span> Design
          </div>
          <div className="category-badge">
            <span>💻</span> Programming
          </div>
          <div className="category-badge">
            <span>✍️</span> Writing
          </div>
          <div className="category-badge">
            <span>📱</span> Marketing
          </div>
          <div className="category-badge">
            <span>🎥</span> Video Editing
          </div>
        </div>

        <div className="info-overlay">
          <h1>Join ServiceHub</h1>
          <p>
            Create your account and unlock access to thousands of trusted
            professionals, secure payments, and premium customer experiences.
          </p>

          {/* Feature List */}
          <ul className="feature-list">
            <li className="feature-item">
              <span className="feature-icon">✓</span>
              Access to 200+ service categories
            </li>
            <li className="feature-item">
              <span className="feature-icon">✓</span>
              Secure payment protection
            </li>
            <li className="feature-item">
              <span className="feature-icon">✓</span>
              24/7 customer support
            </li>
            <li className="feature-item">
              <span className="feature-icon">✓</span>
              Verified professional profiles
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}