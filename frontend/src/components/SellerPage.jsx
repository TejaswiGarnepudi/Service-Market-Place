import React, { useState } from "react";
import "./SellerPage.css";

export default function SellerProfile() {
  const [services, setServices] = useState([
    { id: 1, title: "Web Development", price: 5000 },
    { id: 2, title: "UI/UX Design", price: 3000 },
  ]);

  const earnings = 25000;
  const completedOrders = 18;
  const rating = 4.8;

  return (
    <div className="seller-container">

      {/* Seller Info */}
      <div className="seller-header">
        <h1>Seller Dashboard</h1>
        <button className="edit-btn">Edit Profile</button>
      </div>

      {/* Stats Section */}
      <div className="stats">
        <div className="card">
          <h3>Total Earnings</h3>
          <p>₹ {earnings}</p>
        </div>

        <div className="card">
          <h3>Completed Orders</h3>
          <p>{completedOrders}</p>
        </div>

        <div className="card">
          <h3>Rating</h3>
          <p>{rating} ⭐</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="services-header">
          <h2>Your Services</h2>
          <button className="add-btn">+ Add New Service</button>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>Price: ₹ {service.price}</p>
              <button className="manage-btn">Manage</button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
