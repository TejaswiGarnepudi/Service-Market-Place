import { Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage() {

  const handleLogin = (e) => {
    e.preventDefault(); // stop page reload
    alert("Logged in successfully!");
  };

  return (
    <div className="login-wrapper">

      {/* LEFT IMAGE SECTION */}
      <div className="login-image">
        <div className="overlay">
          <h1>Welcome to ServiceHub</h1>
          <p>
            Book trusted professionals for all your service needs — fast,
            secure, and reliable.
          </p>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="login-form-section">
        <div className="login-box">
          <h2>Login</h2>
          <p>Please login to continue</p>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email address"
              required
            />

            <input
              type="password"
              placeholder="Password"
              required
            />

            <button type="submit">Login</button>
          </form>

          <div className="extra-links">
            <Link to="#">Forgot Password?</Link>
          </div>

          <p className="register-text">
            Don’t have an account?
            <Link to="/register"> Register</Link>
          </p>
        </div>
      </div>

    </div>
  );
}

