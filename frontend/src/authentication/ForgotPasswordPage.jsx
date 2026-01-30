import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");

    if (email.trim() === "") {
      setEmailError("Email is required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Success - show confirmation
    setIsSubmitted(true);
  };

  return (
    <div className="forgot-wrapper">
      {/* Left Info Section */}
      <div className="forgot-info">
        <div className="info-content">
          <h1>Reset Your Password</h1>
          <p>
            Don't worry! It happens. Enter your email address and we'll send you
            a link to reset your password.
          </p>

          <div className="info-features">
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <div>
                <h3>Secure Process</h3>
                <p>Your data is encrypted and protected</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div>
                <h3>Quick Recovery</h3>
                <p>Get back to your account in minutes</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✉️</div>
              <div>
                <h3>Email Verification</h3>
                <p>Reset link sent directly to your inbox</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="forgot-form-section">
        <div className="forgot-box">
          {!isSubmitted ? (
            <>
              <div className="forgot-header">
                <div className="icon-circle">🔑</div>
                <h2>Forgot Password?</h2>
                <p>Enter your email to receive reset instructions</p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="input-group">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                  />
                  {emailError && <p className="error-text">{emailError}</p>}
                </div>

                <button type="submit" className="submit-btn">
                  Send Reset Link
                </button>
              </form>

              <div className="back-to-login">
                <Link to="/login">← Back to Login</Link>
              </div>
            </>
          ) : (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Check Your Email</h2>
              <p>
                We've sent password reset instructions to
                <strong> {email}</strong>
              </p>
              <div className="success-info">
                <p>Didn't receive the email? Check your spam folder or</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="resend-btn"
                >
                  Try Another Email
                </button>
              </div>
              <div className="back-to-login">
                <Link to="/login">← Back to Login</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}