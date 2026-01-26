import React from 'react'
import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'buyer'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    alert('Registration successful!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Register</h1>
        
        <div style={styles.formGroup}>
          <label style={styles.label}>User Type</label>
          <select name="userType" value={formData.userType} onChange={handleChange} style={styles.input}>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} style={styles.input} placeholder="Enter username"/>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} placeholder="Enter email"/>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={styles.input} placeholder="Enter password"/>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={styles.input} placeholder="Confirm password"/>
        </div>

        <button onClick={handleSubmit} style={styles.button}>
          Register
        </button>

        <p style={styles.footer}>
          Already have an account? <a href="#" style={styles.link}>Login</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5' },
  card: { background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', width: '400px' },
  title: { textAlign: 'center', marginBottom: '30px', color: '#333', fontFamily: 'Times New Roman, serif', fontWeight: 'bold' },
  formGroup: { marginBottom: '20px' },
  label: { display: 'block', marginBottom: '5px', color: '#555', fontSize: '14px', fontFamily: 'Times New Roman, serif', fontWeight: 'bold' },
  input: { width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '14px', boxSizing: 'border-box' },
  button: { width: '100%', padding: '12px', background: '#0ccc6f', color: 'white', border: 'none', borderRadius: '4px', fontSize: '16px', cursor: 'pointer' },
  footer: { textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' },
  link: { color: '#0ccc6f', textDecoration: 'none' }
};
