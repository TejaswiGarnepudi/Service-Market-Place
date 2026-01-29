import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Homepage.css";

export default function Homepage() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Check if user is logged in (you'll need to implement proper auth check)
  const isLoggedIn = false; // Replace with actual auth check
  
  const handleSearch = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      // Perform search logic
      console.log("Searching for:", searchQuery, "in", selectedLocation);
    }
  };

  const locations = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
    "Dallas, TX",
    "San Jose, CA"
  ];

  const popularServices = [
    "House Cleaning",
    "Plumbing Repair",
    "Electrical Work",
    "Web Design",
    "Moving Services",
    "Painting",
    "Lawn Care",
    "HVAC Repair"
  ];

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            ✨ Trusted by 50K+ Customers
          </div>
          
          <h1 className="hero-title">
            Find Trusted Services<br />Near You
          </h1>
          
          <p className="hero-description">
            From home cleaning to web development, hire professionals in minutes.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn-primary">
              Explore Services
            </Link>
            <Link to="/register" className="btn-secondary">
              Become a Seller
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">FREELANCERS</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">CATEGORIES</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">1M+</span>
              <span className="stat-label">PROJECTS</span>
            </div>
          </div>
        </div>

        {/* Floating Service Cards */}
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">🧹</div>
            <div className="card-info">
              <div className="card-title">Home Cleaning</div>
              <div className="card-price">From $50</div>
            </div>
          </div>
          
          <div className="floating-card card-2">
            <div className="card-icon">💻</div>
            <div className="card-info">
              <div className="card-title">Web Development</div>
              <div className="card-price">From $200</div>
            </div>
          </div>
          
          <div className="floating-card card-3">
            <div className="card-icon">🔧</div>
            <div className="card-info">
              <div className="card-title">Plumbing</div>
              <div className="card-price">From $40</div>
            </div>
          </div>

          {/* Background Circle */}
          <div className="hero-circle"></div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="search-section">
        <div className="search-wrapper">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for services (Plumber, Developer, Electrician...)"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select 
              className="location-select"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>

          {/* Popular Services */}
          <div className="popular-services">
            <span className="popular-label">Popular:</span>
            {popularServices.map((service, index) => (
              <button key={index} className="popular-tag">
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <h2 className="section-title">Browse by Category</h2>

        <div className="category-grid">
          <Link to="/category/home-services" className="category-card">
            <div className="category-icon">🏠</div>
            <h3>Home Services</h3>
          </Link>

          <Link to="/category/tech" className="category-card">
            <div className="category-icon">💻</div>
            <h3>Tech & IT</h3>
          </Link>

          <Link to="/category/creative" className="category-card">
            <div className="category-icon">🎨</div>
            <h3>Creative & Design</h3>
          </Link>

          <Link to="/category/business" className="category-card">
            <div className="category-icon">💼</div>
            <h3>Business Services</h3>
          </Link>

          <Link to="/category/health" className="category-card">
            <div className="category-icon">🏥</div>
            <h3>Health & Wellness</h3>
          </Link>

          <Link to="/category/education" className="category-card">
            <div className="category-icon">📚</div>
            <h3>Education & Training</h3>
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Get started in three simple steps</p>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">01</div>
            <div className="step-icon">🔍</div>
            <h3>Search a Service</h3>
            <p>Find the service you need from our extensive catalog</p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">02</div>
            <div className="step-icon">✓</div>
            <h3>Choose a Professional</h3>
            <p>Select from verified experts with reviews and ratings</p>
          </div>

          <div className="step-arrow">→</div>

          <div className="step">
            <div className="step-number">03</div>
            <div className="step-icon">📋</div>
            <h3>Book & Get Work Done</h3>
            <p>Hire and relax, we've got the rest covered</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose">
        <h2 className="section-title">Why Choose Us</h2>

        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">✓</div>
            <h3>Verified Professionals</h3>
            <p>All service providers are background-checked and verified</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payments</h3>
            <p>Your payments are protected with industry-leading security</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h3>Affordable Pricing</h3>
            <p>Transparent pricing with no hidden fees or surprises</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🌟</div>
            <h3>24/7 Support</h3>
            <p>Round-the-clock customer support for your peace of mind</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Create an account and unlock access to thousands of trusted professionals</p>
        <Link to="/register" className="cta-btn">Join ServiceHub Today</Link>
        
        {/* Social Links */}
        <div className="social-links">
          <span>Connect with us:</span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            Twitter
          </a>
        </div>
      </section>
    </div>
  );
}