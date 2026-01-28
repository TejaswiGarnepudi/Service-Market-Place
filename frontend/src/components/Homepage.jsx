import { Link } from "react-router-dom";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>Find Trusted Services Near You</h1>
          <p>
            Book skilled professionals for home services, IT solutions,
            and more — quickly and securely.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="primary-btn">Login</Link>
            <Link to="/register" className="secondary-btn">Register</Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
            alt="service illustration"
          />
        </div>
      </section>

      {/* SEARCH */}
      <section className="search-section">
        <input
          type="text"
          placeholder="Search services like Plumber, Developer, Electrician..."
        />
        <button>Search</button>
      </section>

      {/* SERVICES */}
      <section className="services">
        <h2>Popular Services</h2>
        <div className="service-grid">
          <div className="service-card">Home Cleaning</div>
          <div className="service-card">Web Development</div>
          <div className="service-card">Plumbing</div>
          <div className="service-card">Electrician</div>
          <div className="service-card">Moving Services</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">Search a Service</div>
          <div className="step">Choose a Professional</div>
          <div className="step">Book & Get Work Done</div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Create an account and book services instantly.</p>
        <Link to="/register" className="primary-btn">Join Now</Link>
      </section>

    </div>
  );
}
