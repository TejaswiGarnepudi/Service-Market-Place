import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent successfully! 🚀", {
        position: "top-right",
        autoClose: 3000,
      });
    }, 1500);
  };

  return (
    <div className="contact-container">
      {/* Hero */}
      <section className="contact-hero">
        <h1>We’re here to help</h1>
        <p>Got a question or feedback? We’re just one message away.</p>
      </section>

      {/* Contact Options */}
      <section className="contact-cards">
        <div className="card">📧 support@skillconnect.com</div>
        <div className="card">📞 +91 XXXXX XXXXX</div>
        <div className="card">💬 Live Chat</div>
        <div className="card">📍 Guntur, India</div>
      </section>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input className="input" placeholder="Full Name" required />
        <input className="input" placeholder="Email" required />
        <textarea
          className="input"
          placeholder="Message"
          rows="4"
          required
        ></textarea>

        <button className="submit-btn" disabled={loading}>
          {loading ? <span className="spinner"></span> : "Send Message"}
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
