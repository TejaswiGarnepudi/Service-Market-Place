import React from "react";
import ProfileNavbar from "../../components/profilenavbar/ProfileNavbar";

export default function Notifications() {
  return (
    <>
      <ProfileNavbar />

      <div style={styles.container}>
        <h2 style={styles.heading}>Notifications</h2>

        <div style={styles.card}>🎉 Your order #245 has been completed.</div>
        <div style={styles.card}>💬 You received a new message from Alex.</div>
        <div style={styles.card}>⭐ Someone left a review on your service.</div>
        <div style={styles.card}>💰 Payment of ₹2,000 has been credited.</div>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "800px",
    margin: "auto",
  },
  heading: {
    marginBottom: "20px",
  },
  card: {
    background: "#fff",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};
