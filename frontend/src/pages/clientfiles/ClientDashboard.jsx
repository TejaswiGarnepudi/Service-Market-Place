import { useState } from "react";
import { Link } from "react-router-dom";
import UserNavbar from "../../components/profilenavbar/ProfileNavbar";
import "./ClientDashboard.css";

export default function ClientDashboard() {
  const [userName] = useState("Teju");
  const [userLocation] = useState("Hyderabad");

  // ⭐ Featured Services
  const featuredServices = [
    {
      id: 1,
      title: "I will write SEO blog articles",
      image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=500&h=300&fit=crop",
      rating: 4,
      price: "₹4000",
      provider: "John Doe"
    },
    {
      id: 2,
      title: "I will design a professional logo",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      rating: 5,
      price: "₹5000",
      provider: "Jane Smith"
    },
    {
      id: 3,
      title: "I will develop a business website",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      rating: 4,
      price: "₹12000",
      provider: "Mike Johnson"
    },
    {
      id: 4,
      title: "I will create social media content",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      rating: 5,
      price: "₹3000",
      provider: "Sarah Wilson"
    }
  ];

  // ⭐ Recommended Services
  const recommendedServices = [
    "Frontend Website Development",
    "SEO Optimization",
    "Plumbing Services",
    "Logo Design",
    "Content Writing",
    "Digital Marketing",
    "Mobile App Development",
    "Graphic Design"
  ];

  // ⭐ Reviews Data
  const clientReviews = [
    {
      id: 1,
      service: "Business Website Development",
      provider: "Mike Johnson",
      rating: 5,
      comment: "Amazing work! Very professional and delivered on time."
    },
    {
      id: 2,
      service: "Logo Design",
      provider: "Jane Smith",
      rating: 4,
      comment: "Great design sense. Communication was smooth."
    },
    {
      id: 3,
      service: "SEO Blog Writing",
      provider: "John Doe",
      rating: 5,
      comment: "Content quality is excellent. Highly recommended!"
    }
  ];

  // ⭐ Star Renderer
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <div className="dashboard-wrapper">
      <UserNavbar />

      <div className="client-dashboard">

        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-content">
            <div className="welcome-icon">👋</div>
            <div className="welcome-text">
              <h1>Welcome back</h1>
              <p>What service are you looking for today?</p>
              <div className="location-info">
                <span className="location-icon">📍</span>
                <span className="location-text">
                  Showing services near {userLocation}
                </span>
              </div>
              {/* <div className="location-info">
                {/* <span className="location-icon">📍</span> */}
                {/* <span className="location-text">Showing services near {userLocation}</span> */}
              {/* </div>  */}
            </div>
          </div>
        </div>

        {/* Categories */}
        <section className="categories-section">
          <h2 className="section-heading">Browse by Category</h2>
          <div className="categories-grid">
            <Link to="/browse-services?category=home" className="category-card">
              <div className="category-icon">🏠</div>
              <h3>Home Services</h3>
              <p>From ₹2000</p>
            </Link>

            <Link to="/browse-services?category=web" className="category-card">
              <div className="category-icon">💻</div>
              <h3>Web Development</h3>
              <p>From ₹200</p>
            </Link>

            <Link to="/browse-services?category=design" className="category-card">
              <div className="category-icon">🎨</div>
              <h3>Design</h3>
              <p>From ₹200</p>
            </Link>

            <Link to="/browse-services?category=marketing" className="category-card">
              <div className="category-icon">📱</div>
              <h3>Digital Marketing</h3>
              <p>From ₹200</p>
            </Link>
          </div>
        </section>

        {/* Featured */}
        <section className="featured-section">
          <div className="section-header">
            <h2 className="section-heading">Featured Services</h2>
            <Link to="/browse-services" className="view-all-link">View All →</Link>
          </div>

          <div className="services-grid">
            {featuredServices.map((service) => (
              <div key={service.id} className="service-card">
                <img src={service.image} alt={service.title} />
                <h4>{service.title}</h4>
                <p>{service.provider}</p>
                <div>{renderStars(service.rating)}</div>
                <p>From {service.price}</p>
                <Link to={`/service/${service.id}`}>
                  <button>View Details</button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended */}
        <section className="recommended-section">
          <h2 className="section-heading">Recommended for you</h2>
          <div className="recommended-tags">
            {recommendedServices.map((service, index) => (
              <Link key={index} to={`/browse-services?query=${service}`} className="recommended-tag">
                {service}
              </Link>
            ))}
          </div>
        </section>

        {/* ⭐⭐⭐ REVIEWS SECTION ADDED HERE ⭐⭐⭐ */}
        <section className="reviews-section">
          <div className="section-header">
            <h2 className="section-heading">Your Recent Reviews</h2>
            <Link to="/reviews" className="view-all-link">View All →</Link>
          </div>

          <div className="reviews-grid">
            {clientReviews.map((review) => (
              <div key={review.id} className="review-card">
                <h4>{review.service}</h4>
                <div>{renderStars(review.rating)}</div>
                <p>Service by {review.provider}</p>
                <p>"{review.comment}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="quick-actions-section">
          <Link to="/orders">Your Orders</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/seller-profile">Become a Seller</Link>
        </section>

      </div>
    </div>
  );
}
