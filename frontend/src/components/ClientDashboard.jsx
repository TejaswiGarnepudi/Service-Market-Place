import "./ClientDashboard.css";
import { Link } from "react-router-dom";

export default function ClientDashboard() {
  return (
    <div className="client-dashboard">

      {/* Welcome Section */}
      <div className="welcome-box">
        <div>
          <h1>Welcome back</h1>
          <p>What service are you looking for today?</p>
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        <div className="category-card">
          <div>
            <h3>Home Services</h3>
            <p>From ₹2000</p>
          </div>
        </div>

        <div className="category-card">
          <div>
            <h3>Web Development</h3>
            <p>From ₹200</p>
          </div>
        </div>

        <div className="category-card">
          <div>
            <h3>Design</h3>
            <p>From ₹200</p>
          </div>
        </div>

        <div className="category-card">
          <div>
            <h3>Digital Marketing</h3>
            <p>From ₹200</p>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <h2 className="section-heading">Featured Services</h2>

      <div className="services-container">

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="seo"
          />
          <div className="service-content">
            <h4>I will write SEO blog articles</h4>
            <div className="rating">⭐⭐⭐⭐☆</div>
            <p className="price">From ₹4000</p>
            <Link to="/browse">
              <button className="primary-btn">View Details</button>
            </Link>
          </div>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="logo"
          />
          <div className="service-content">
            <h4>I will design a professional logo</h4>
            <div className="rating">⭐⭐⭐⭐☆</div>
            <p className="price">From ₹5000</p>
            <Link to="/browse">
              <button className="primary-btn">View Details</button>
            </Link>
          </div>
        </div>

        <div className="service-card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="website"
          />
          <div className="service-content">
            <h4>I will develop a business website</h4>
            <div className="rating">⭐⭐⭐⭐☆</div>
            <p className="price">From ₹12000</p>
            <Link to="/browse">
              <button className="primary-btn">View Details</button>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
