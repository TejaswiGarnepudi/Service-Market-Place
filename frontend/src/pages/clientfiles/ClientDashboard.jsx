import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserNavbar from "../../components/profilenavbar/ProfileNavbar";
import "./ClientDashboard.css";

export default function ClientDashboard() {
  const [userName, setUserName] = useState("Teju");
  const [userLocation, setUserLocation] = useState("Hyderabad");

  // Dummy featured services data
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

  // Dummy recommended services
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

  // Render star rating
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
              {/* <div className="location-info">
                {/* <span className="location-icon">📍</span> */}
                {/* <span className="location-text">Showing services near {userLocation}</span> */}
              {/* </div>  */}
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <section className="categories-section">
          <h2 className="section-heading">Browse by Category</h2>
          
          <div className="categories-grid">
            <Link to="/browse-services?category=home" className="category-card">
              <div className="category-icon-wrapper">
                <div className="category-icon">🏠</div>
              </div>
              <div className="category-info">
                <h3>Home Services</h3>
                <p>From ₹2000</p>
              </div>
            </Link>

            <Link to="/browse-services?category=web" className="category-card">
              <div className="category-icon-wrapper">
                <div className="category-icon">💻</div>
              </div>
              <div className="category-info">
                <h3>Web Development</h3>
                <p>From ₹200</p>
              </div>
            </Link>

            <Link to="/browse-services?category=design" className="category-card">
              <div className="category-icon-wrapper">
                <div className="category-icon">🎨</div>
              </div>
              <div className="category-info">
                <h3>Design</h3>
                <p>From ₹200</p>
              </div>
            </Link>

            <Link to="/browse-services?category=marketing" className="category-card">
              <div className="category-icon-wrapper">
                <div className="category-icon">📱</div>
              </div>
              <div className="category-info">
                <h3>Digital Marketing</h3>
                <p>From ₹200s</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Featured Services */}
        <section className="featured-section">
          <div className="section-header">
            <h2 className="section-heading">Featured Services</h2>
            <Link to="/browse-services" className="view-all-link">
              View All →
            </Link>
          </div>

          <div className="services-grid">
            {featuredServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <Link to={`/service/${service.id}`} className="quick-view-btn">
                      Quick View
                    </Link>
                  </div>
                </div>
                
                <div className="service-content">
                  <h4 className="service-title">{service.title}</h4>
                  
                  <div className="service-provider">
                    <span className="provider-avatar">👤</span>
                    <span className="provider-name">{service.provider}</span>
                  </div>
                  
                  <div className="service-footer">
                    <div className="service-rating">
                      {renderStars(service.rating)}
                      <span className="rating-text">({service.rating}.0)</span>
                    </div>
                    <p className="service-price">From {service.price}</p>
                  </div>
                  
                  <Link to={`/service/${service.id}`}>
                    <button className="view-details-btn">View Details</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended Services */}
        <section className="recommended-section">
          <h2 className="section-heading">Recommended for you</h2>
          <p className="section-subtitle">Based on your browsing history and interests</p>
          
          <div className="recommended-tags">
            {recommendedServices.map((service, index) => (
              <Link 
                key={index} 
                to={`/browse-services?query=${encodeURIComponent(service)}`}
                className="recommended-tag"
              >
                {service}
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="quick-actions-section">
          <div className="quick-action-card">
            <div className="quick-action-icon">📦</div>
            <h3>Your Orders</h3>
            <p>Track and manage your service orders</p>
            <Link to="/orders" className="quick-action-link">View Orders →</Link>
          </div>

          <div className="quick-action-card">
            <div className="quick-action-icon">💬</div>
            <h3>Messages</h3>
            <p>Chat with service providers</p>
            <Link to="/messages" className="quick-action-link">Open Messages →</Link>
          </div>

          <div className="quick-action-card highlight-card">
            <div className="quick-action-icon">💼</div>
            <h3>Become a Seller</h3>
            <p>Start offering your services and earn</p>
            <Link to="/seller-profile" className="quick-action-link">Get Started →</Link>
          </div>
        </section>
      </div>
    </div>
  );
}