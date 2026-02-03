import { Link } from "react-router-dom";
import "./SellerDashboard.css";

export default function SellerDashboard() {
  const sellerStats = [
    { icon: "💰", label: "Total Earnings", value: "₹45,000" },
    { icon: "📦", label: "Active Orders", value: "12" },
    { icon: "⭐", label: "Rating", value: "4.8" },
    { icon: "👥", label: "Total Clients", value: "38" }
  ];

  const recentOrders = [
    { id: 1, service: "Logo Design", client: "John Doe", status: "In Progress", amount: "₹5,000" },
    { id: 2, service: "Website Development", client: "Jane Smith", status: "Completed", amount: "₹15,000" },
    { id: 3, service: "Content Writing", client: "Mike Johnson", status: "Pending", amount: "₹3,000" }
  ];

  return (
    <div className="seller-dashboard-wrapper">
      <div className="seller-dashboard">
        <div className="dashboard-header">
          <div>
            <h1>Seller Dashboard</h1>
            <p>Manage your services and track your earnings</p>
          </div>
          <Link to="/create-service" className="create-service-btn">
            + Create New Service
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {sellerStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <p className="stat-label">{stat.label}</p>
                <h3 className="stat-value">{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Orders */}
        <div className="orders-section">
          <h2>Recent Orders</h2>
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Client</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.service}</td>
                    <td>{order.client}</td>
                    <td>
                      <span className={`status-badge ${order.status.toLowerCase().replace(' ', '-')}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="amount">{order.amount}</td>
                    <td>
                      <button className="view-btn">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <Link to="/my-services" className="action-card">
            <span className="action-icon">📋</span>
            <h3>My Services</h3>
            <p>View and manage your services</p>
          </Link>
          
          <Link to="/analytics" className="action-card">
            <span className="action-icon">📊</span>
            <h3>Analytics</h3>
            <p>Track your performance</p>
          </Link>
          
          <Link to="/withdrawals" className="action-card">
            <span className="action-icon">💳</span>
            <h3>Withdrawals</h3>
            <p>Manage your earnings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}