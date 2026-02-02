const Orders = () => {
  const orders = [
    {
      id: "ORD12345",
      service: "AC Repair",
      date: "30 Jan 2026",
      status: "In Progress",
    },
    {
      id: "ORD12346",
      service: "Plumbing Service",
      date: "28 Jan 2026",
      status: "Completed",
    },
  ];

  return (
    <div style={{ padding: "80px 40px", maxWidth: "1000px", margin: "0 auto" }}>
      
      {/* Header */}
      <section style={{ marginBottom: "40px" }}>
        <h1>Your Orders</h1>
        <p style={{ color: "#6b7280" }}>
          Track and manage your service orders
        </p>
      </section>

      {/* Orders List */}
      {orders.length > 0 ? (
        <div style={{ display: "grid", gap: "20px" }}>
          {orders.map((order) => (
            <div
              key={order.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div>
                <h3>{order.service}</h3>
                <p style={{ fontSize: "14px", color: "#6b7280" }}>
                  Order ID: {order.id}
                </p>
                <p style={{ fontSize: "14px", color: "#6b7280" }}>
                  Date: {order.date}
                </p>
              </div>

              <div style={{ textAlign: "right" }}>
                <span
                  style={{
                    padding: "6px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    background:
                      order.status === "Completed"
                        ? "#dcfce7"
                        : "#e0e7ff",
                    color:
                      order.status === "Completed"
                        ? "#166534"
                        : "#3730a3",
                  }}
                >
                  {order.status}
                </span>

                <br />
                <br />

                <button
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#6366f1",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div style={{ textAlign: "center", marginTop: "80px" }}>
          <h3>No orders yet 📦</h3>
          <p>Looks like you haven’t booked any services.</p>
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              borderRadius: "8px",
              background: "#6366f1",
              color: "#fff",
              border: "none",
            }}
          >
            Browse Services
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;
