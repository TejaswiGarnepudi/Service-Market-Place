import { useState } from "react";
import ProfileNavbar from "./ProfileNavbar";
import "./UserProfilePage.css";

export default function UserProfilePage() {

  const [activeTab, setActiveTab] = useState("personal");

  return (
    <>
      <ProfileNavbar />

      <div className="profile-container">

        {/* LEFT SIDEBAR */}
        <div className="profile-sidebar">
          <div className="profile-card">
            <div className="profile-avatar"></div>
            <h3>Your Name</h3>
            <p>yourmail@email.com</p>
            <button className="edit-btn">Edit Profile</button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="profile-content">
          <h2>My Profile</h2>

          <div className="tabs">
            <span
              className={activeTab === "personal" ? "active-tab" : ""}
              onClick={() => setActiveTab("personal")}
            >
              Personal Info
            </span>

            <span
              className={activeTab === "account" ? "active-tab" : ""}
              onClick={() => setActiveTab("account")}
            >
              Account
            </span>

            <span
              className={activeTab === "seller" ? "active-tab" : ""}
              onClick={() => setActiveTab("seller")}
            >
              Seller Info
            </span>

            <span
              className={activeTab === "security" ? "active-tab" : ""}
              onClick={() => setActiveTab("security")}
            >
              Security
            </span>
          </div>

          {activeTab === "personal" && (
            <div className="form-section">

              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />

              <label>Username</label>
              <input type="text" placeholder="Enter username" />

              <label>Email</label>
              <input type="email" placeholder="Enter email" />

              <label>Location</label>
              <input type="text" placeholder="Enter location" />

              <label>Bio</label>
              <textarea placeholder="Tell something about yourself" />

              <div className="button-group">
                <button className="save-btn">Save Changes</button>
                <button className="cancel-btn">Cancel</button>
              </div>

            </div>
          )}

        </div>
      </div>
    </>
  );
}
