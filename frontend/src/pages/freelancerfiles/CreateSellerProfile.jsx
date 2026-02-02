import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/profilenavbar/ProfileNavbar";
import "./CreateSellerProfile.css";

export default function CreateSellerProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    description: "",
    skills: "",
    hourlyRate: "",
    portfolio: "",
    experience: "",
    education: "",
  });

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");

  const categories = [
    "Web Development",
    "Mobile Development",
    "Graphic Design",
    "Content Writing",
    "Digital Marketing",
    "Video Editing",
    "Photography",
    "Translation",
    "Virtual Assistant",
    "Consulting",
    "Other"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddSkill = () => {
    if (currentSkill.trim() && selectedSkills.length < 10) {
      setSelectedSkills([...selectedSkills, currentSkill.trim()]);
      setCurrentSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.businessName || !formData.category || !formData.description) {
      alert("Please fill in all required fields");
      return;
    }

    // Save seller profile status
    localStorage.setItem("hasSellerProfile", "true");
    localStorage.setItem("sellerProfileData", JSON.stringify({
      ...formData,
      skills: selectedSkills
    }));

    // Navigate to seller dashboard
    navigate("/seller-dashboard");
  };

  return (
    <div className="create-seller-wrapper">
      <UserNavbar />
      
      <div className="create-seller-container">
        <div className="seller-hero">
          <div className="hero-content">
            <h1>🚀 Become a Seller on SkillConnect</h1>
            <p>Join thousands of professionals earning by offering their services</p>
            
            <div className="hero-stats">
              <div className="stat-box">
                <span className="stat-value">50K+</span>
                <span className="stat-label">Active Sellers</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">$2M+</span>
                <span className="stat-label">Earned Monthly</span>
              </div>
              <div className="stat-box">
                <span className="stat-value">4.8★</span>
                <span className="stat-label">Avg Rating</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-header">
            <h2>Create Your Seller Profile</h2>
            <p>Tell us about your services and expertise</p>
          </div>

          <form onSubmit={handleSubmit} className="seller-form">
            {/* Business Name */}
            <div className="form-group">
              <label htmlFor="businessName">
                Business/Professional Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="e.g., Creative Design Studio"
                required
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label htmlFor="category">
                Service Category <span className="required">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a category</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div className="form-group">
              <label htmlFor="description">
                Profile Description <span className="required">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe your services, expertise, and what makes you unique..."
                rows="5"
                required
              />
              <span className="helper-text">Min 150 characters</span>
            </div>

            {/* Skills */}
            <div className="form-group">
              <label htmlFor="skills">
                Skills & Expertise
              </label>
              <div className="skills-input-wrapper">
                <input
                  type="text"
                  id="skills"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  placeholder="Type a skill and press Add"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSkill();
                    }
                  }}
                />
                <button 
                  type="button" 
                  className="add-skill-btn"
                  onClick={handleAddSkill}
                >
                  Add
                </button>
              </div>
              
              {selectedSkills.length > 0 && (
                <div className="skills-list">
                  {selectedSkills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(skill)}
                        className="remove-skill-btn"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
              <span className="helper-text">Add up to 10 skills</span>
            </div>

            {/* Hourly Rate */}
            <div className="form-group">
              <label htmlFor="hourlyRate">
                Hourly Rate (₹)
              </label>
              <input
                type="number"
                id="hourlyRate"
                name="hourlyRate"
                value={formData.hourlyRate}
                onChange={handleInputChange}
                placeholder="e.g., 500"
                min="0"
              />
            </div>

            {/* Experience */}
            <div className="form-group">
              <label htmlFor="experience">
                Years of Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="e.g., 5"
                min="0"
              />
            </div>

            {/* Portfolio */}
            <div className="form-group">
              <label htmlFor="portfolio">
                Portfolio/Website URL
              </label>
              <input
                type="url"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                placeholder="https://yourportfolio.com"
              />
            </div>

            {/* Education */}
            <div className="form-group">
              <label htmlFor="education">
                Education/Certifications
              </label>
              <textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                placeholder="List your education background and certifications..."
                rows="3"
              />
            </div>

            {/* Terms */}
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>
                  I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
                </span>
              </label>
            </div>

            {/* Submit Buttons */}
            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => navigate("/dashboard")}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Create Seller Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}