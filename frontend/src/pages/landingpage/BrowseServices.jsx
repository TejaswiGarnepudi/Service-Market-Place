import { Link } from "react-router-dom";
import { useState } from "react";
import "./BrowseServices.css";

export default function BrowseServices() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");

  const categories = [
    { id: "all", name: "All Services", icon: "🔍" },
    { id: "graphics-design", name: "Graphics & Design", icon: "🎨" },
    { id: "digital-marketing", name: "Digital Marketing", icon: "📱" },
    { id: "writing", name: "Writing & Translation", icon: "✍️" },
    { id: "video-animation", name: "Video & Animation", icon: "🎬" },
    { id: "music-audio", name: "Music & Audio", icon: "🎵" },
    { id: "programming", name: "Programming & Tech", icon: "💻" },
    { id: "business", name: "Business", icon: "💼" },
    { id: "lifestyle", name: "Lifestyle", icon: "🌟" }
  ];

  const services = [
    {
      id: 1,
      title: "I will design a modern logo for your business",
      category: "graphics-design",
      seller: {
        name: "Sarah Johnson",
        level: "Top Rated",
        avatar: "👩‍💼",
        rating: 4.9,
        reviews: 328
      },
      price: 45,
      image: "🎨",
      deliveryTime: "2 days",
      featured: true
    },
    {
      id: 2,
      title: "I will create professional social media content",
      category: "digital-marketing",
      seller: {
        name: "Mike Chen",
        level: "Level 2",
        avatar: "👨‍💻",
        rating: 5.0,
        reviews: 156
      },
      price: 75,
      image: "📱",
      deliveryTime: "3 days",
      featured: true
    },
    {
      id: 3,
      title: "I will write SEO optimized blog posts and articles",
      category: "writing",
      seller: {
        name: "Emma Wilson",
        level: "Top Rated",
        avatar: "👩‍🎨",
        rating: 4.8,
        reviews: 512
      },
      price: 60,
      image: "✍️",
      deliveryTime: "2 days",
      featured: false
    },
    {
      id: 4,
      title: "I will create engaging video ads for your product",
      category: "video-animation",
      seller: {
        name: "Alex Rivera",
        level: "Level 2",
        avatar: "👨‍🎨",
        rating: 4.9,
        reviews: 243
      },
      price: 150,
      image: "🎬",
      deliveryTime: "5 days",
      featured: false
    },
    {
      id: 5,
      title: "I will produce professional voiceovers",
      category: "music-audio",
      seller: {
        name: "David Park",
        level: "Top Rated",
        avatar: "👨‍🎤",
        rating: 5.0,
        reviews: 189
      },
      price: 85,
      image: "🎵",
      deliveryTime: "1 day",
      featured: true
    },
    {
      id: 6,
      title: "I will develop a responsive website from scratch",
      category: "programming",
      seller: {
        name: "Lisa Anderson",
        level: "Level 2",
        avatar: "👩‍💻",
        rating: 4.9,
        reviews: 421
      },
      price: 200,
      image: "💻",
      deliveryTime: "7 days",
      featured: false
    },
    {
      id: 7,
      title: "I will create a complete brand identity package",
      category: "graphics-design",
      seller: {
        name: "James Taylor",
        level: "Top Rated",
        avatar: "👨‍🎨",
        rating: 4.8,
        reviews: 367
      },
      price: 120,
      image: "🎨",
      deliveryTime: "4 days",
      featured: false
    },
    {
      id: 8,
      title: "I will manage your Instagram growth strategy",
      category: "digital-marketing",
      seller: {
        name: "Sophia Martinez",
        level: "Level 2",
        avatar: "👩‍💼",
        rating: 4.9,
        reviews: 298
      },
      price: 95,
      image: "📱",
      deliveryTime: "Ongoing",
      featured: true
    },
    {
      id: 9,
      title: "I will translate documents professionally",
      category: "writing",
      seller: {
        name: "Carlos Rodriguez",
        level: "Level 1",
        avatar: "👨‍💼",
        rating: 4.7,
        reviews: 134
      },
      price: 40,
      image: "✍️",
      deliveryTime: "2 days",
      featured: false
    },
    {
      id: 10,
      title: "I will create 2D animation videos",
      category: "video-animation",
      seller: {
        name: "Nina Patel",
        level: "Top Rated",
        avatar: "👩‍🎨",
        rating: 5.0,
        reviews: 445
      },
      price: 180,
      image: "🎬",
      deliveryTime: "6 days",
      featured: false
    },
    {
      id: 11,
      title: "I will mix and master your music track",
      category: "music-audio",
      seller: {
        name: "Ryan Cooper",
        level: "Level 2",
        avatar: "👨‍🎤",
        rating: 4.8,
        reviews: 267
      },
      price: 70,
      image: "🎵",
      deliveryTime: "3 days",
      featured: false
    },
    {
      id: 12,
      title: "I will build custom WordPress websites",
      category: "programming",
      seller: {
        name: "Rachel Kim",
        level: "Top Rated",
        avatar: "👩‍💻",
        rating: 4.9,
        reviews: 523
      },
      price: 175,
      image: "💻",
      deliveryTime: "5 days",
      featured: true
    }
  ];

  const filteredServices = services.filter(service => {
    if (selectedCategory !== "all" && service.category !== selectedCategory) {
      return false;
    }
    if (priceRange === "budget" && service.price > 50) return false;
    if (priceRange === "mid" && (service.price < 51 || service.price > 150)) return false;
    if (priceRange === "premium" && service.price < 151) return false;
    return true;
  });

  return (
    <div className="browse-container">
      {/* Header */}
      <div className="browse-header">
        <div className="browse-header-content">
          <h1>Browse Services</h1>
          <p>Discover professional freelancers ready to help with your project</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="category-tabs-wrapper">
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="browse-main">
        {/* Sidebar Filters */}
        <aside className="browse-sidebar">
          <div className="filter-section">
            <h3 className="filter-title">Filters</h3>
            
            <div className="filter-group">
              <label className="filter-label">Price Range</label>
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    value="all"
                    checked={priceRange === "all"}
                    onChange={(e) => setPriceRange(e.target.value)}
                  />
                  <span>All Prices</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    value="budget"
                    checked={priceRange === "budget"}
                    onChange={(e) => setPriceRange(e.target.value)}
                  />
                  <span>Budget ($0 - $50)</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    value="mid"
                    checked={priceRange === "mid"}
                    onChange={(e) => setPriceRange(e.target.value)}
                  />
                  <span>Mid-Range ($51 - $150)</span>
                </label>
                <label className="filter-option">
                  <input
                    type="radio"
                    name="price"
                    value="premium"
                    checked={priceRange === "premium"}
                    onChange={(e) => setPriceRange(e.target.value)}
                  />
                  <span>Premium ($151+)</span>
                </label>
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Seller Level</label>
              <div className="filter-options">
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Top Rated Seller</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Level 2</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Level 1</span>
                </label>
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Delivery Time</label>
              <div className="filter-options">
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Express (24 hours)</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Up to 3 days</span>
                </label>
                <label className="filter-option">
                  <input type="checkbox" />
                  <span>Up to 7 days</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Services Grid */}
        <div className="browse-content">
          <div className="browse-toolbar">
            <div className="results-count">
              {filteredServices.length} services available
            </div>
            <div className="sort-controls">
              <label htmlFor="sort">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="recommended">Recommended</option>
                <option value="best-selling">Best Selling</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="services-grid">
            {filteredServices.map((service) => (
              <Link
                to={`/service/${service.id}`}
                key={service.id}
                className="service-card"
              >
                {service.featured && (
                  <div className="featured-badge">Featured</div>
                )}
                
                <div className="service-image">
                  <div className="service-icon">{service.image}</div>
                </div>

                <div className="service-info">
                  <div className="seller-info">
                    <span className="seller-avatar">{service.seller.avatar}</span>
                    <div className="seller-details">
                      <span className="seller-name">{service.seller.name}</span>
                      <span className="seller-level">{service.seller.level}</span>
                    </div>
                  </div>

                  <h3 className="service-title">{service.title}</h3>

                  <div className="service-rating">
                    <span className="star">⭐</span>
                    <span className="rating-value">{service.seller.rating}</span>
                    <span className="reviews-count">({service.seller.reviews})</span>
                  </div>
                </div>

                <div className="service-footer">
                  <div className="delivery-time">
                    <span className="clock-icon">🕐</span>
                    {service.deliveryTime}
                  </div>
                  <div className="service-price">
                    <span className="price-label">Starting at</span>
                    <span className="price-value">${service.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="page-btn" disabled>Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}