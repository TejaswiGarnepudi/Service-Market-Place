import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="badge">
            <span>✨</span>
            <span>Trusted Service Marketplace</span>
          </div>
          <h1 className="hero-title">About SkillConnect</h1>
          <p className="hero-subtitle">
            SkillConnect connects skilled professionals with people who need reliable services —
            fast, simple, and secure. We're building India's most trusted platform for service delivery.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">Our Mission</h3>
            <p className="feature-description">
              Empower skilled professionals and make services accessible, transparent, and 
              trustworthy for everyone across India.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">Our Vision</h3>
            <p className="feature-description">
              Become India's most reliable service marketplace built on trust, quality, 
              and innovation, transforming how services are discovered and delivered.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3 className="feature-title">Why SkillConnect?</h3>
            <p className="feature-description">
              Verified professionals, seamless booking, secure payments, 24/7 support, 
              and a customer-first approach that puts your satisfaction above all.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">5,000+</span>
              <p className="stat-label">Verified Professionals</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <p className="stat-label">Services Completed</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8 ★</span>
              <p className="stat-label">Average Rating</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <p className="stat-label">Service Categories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do and shape the SkillConnect experience
          </p>
          
          <div className="values-grid">
            {[
              {
                number: "01",
                title: "Trust & Safety",
                description: "Every professional is thoroughly verified with background checks, skill assessments, and customer reviews to ensure your safety and satisfaction."
              },
              {
                number: "02",
                title: "Quality First",
                description: "We maintain the highest standards through continuous monitoring, feedback systems, and professional training programs."
              },
              {
                number: "03",
                title: "Transparency",
                description: "Clear pricing, detailed service descriptions, honest reviews, and no hidden fees. You always know exactly what you're getting."
              },
              {
                number: "04",
                title: "Innovation",
                description: "Leveraging cutting-edge technology to make service discovery, booking, and delivery smoother and more efficient than ever."
              },
              {
                number: "05",
                title: "Community",
                description: "Building a supportive ecosystem where professionals thrive and customers receive exceptional service experiences."
              },
              {
                number: "06",
                title: "Customer Focus",
                description: "Your satisfaction drives every decision. 24/7 support, money-back guarantee, and dedicated care at every step."
              }
            ].map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-number">{value.number}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Dedicated professionals working to revolutionize the service marketplace
          </p>
          
          <div className="team-grid">
            {[
              {
                emoji: "👨‍💼",
                name: "Yashwanth",
                role: "Founder & CEO",
                bio: "15+ years in tech startups. Passionate about connecting people and creating meaningful economic opportunities."
              },
              {
                emoji: "👩‍💻",
                name: "Selina",
                role: "Head of Product",
                bio: "Product visionary with expertise in marketplace platforms and user-centered design."
              },
              {
                emoji: "👨‍🔧",
                name: "Hemanth",
                role: "Head of Operations",
                bio: "Operations expert ensuring quality, safety, and seamless service delivery across all categories."
              },
              {
                emoji: "👩‍🎨",
                name: "Tejaswi Reddy",
                role: "Head of Customer Success",
                bio: "Customer experience champion committed to delivering exceptional support and satisfaction."
              }
            ].map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">{member.emoji}</div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to get started?</h2>
          <p className="cta-subtitle">Find trusted professionals near you in minutes.</p>
          <div className="cta-buttons">
            <Link to="/browse-services" className="btn btn-primary">Browse Services</Link>
            <Link to="/register" className="btn btn-outline">Join as a Professional</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;