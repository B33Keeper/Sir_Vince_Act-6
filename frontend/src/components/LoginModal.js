import React, { useState } from 'react';
import './Form.css';

const LoginModal = ({ onClose, onSwitchToSignup, onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u) => u.username === formData.username && u.password === formData.password
    );

    if (user) {
      // Save current user session
      if (formData.rememberMe) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
      }
      onLogin(user);
      onClose();
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-header">LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="username">
            USERNAME:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-input"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password">
            PASSWORD:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              style={{ cursor: 'pointer' }}
            />
            <span style={{ fontSize: '0.9rem', color: '#000' }}>Remember me</span>
          </label>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Forgot password feature coming soon!'); }} style={{ fontSize: '0.85rem', color: '#666', textDecoration: 'none' }}>
            Forget password ?
          </a>
        </div>

        <div className="form-actions" style={{ flexDirection: 'column', gap: '1rem' }}>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            <i className="fas fa-sign-in-alt" style={{ marginRight: '0.5rem' }}></i>
            LOGIN
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onSwitchToSignup}
            style={{ width: '100%' }}
          >
            <i className="fas fa-user-plus" style={{ marginRight: '0.5rem' }}></i>
            Don't have an account? SIGN UP
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <i className="fas fa-times" style={{ marginRight: '0.5rem' }}></i>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;

