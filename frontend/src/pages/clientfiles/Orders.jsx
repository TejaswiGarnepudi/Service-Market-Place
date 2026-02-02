import "./Orders.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaBox } from "react-icons/fa";

const orders = [
  {
    id: "ORD-1001",
    service: "Electrical Repair",
    status: "Pending",
    date: "02 Feb 2026",
    location: "Hyderabad",
  },
  {
    id: "ORD-1002",
    service: "Plumbing Service",
    status: "Completed",
    date: "28 Jan 2026",
    location: "Secunderabad",
  },
  {
    id: "ORD-1003",
    service: "Home Cleaning",
    status: "Pending",
    date: "01 Feb 2026",
    location: "Hyderabad",
  },
];

const Orders = () => {
  return (
    <div className="orders-container">
      <h2 className="orders-title">My Orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <div className="order-header">
            <h3>{order.service}</h3>
            <span className={`status ${order.status.toLowerCase()}`}>
              {order.status}
            </span>
          </div>

          <div className="order-info">
            <p>
              <FaCalendarAlt /> {order.date}
            </p>
            <p>
              <FaMapMarkerAlt /> {order.location}
            </p>
            <p>
              <FaBox /> Order ID: {order.id}
            </p>
          </div>

          <button className="details-btn">View Details</button>
        </div>
      ))}
    </div>
  );
};

export default Orders;
