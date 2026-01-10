import React, { useState } from 'react';
import './Form.css';

const SignupModal = ({ onClose, onSwitchToLogin, onSignup }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    retypePassword: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.retypePassword) {
      newErrors.retypePassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Check if username already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((u) => u.username === formData.username);

    if (userExists) {
      alert('Username already exists. Please choose another one.');
      return;
    }

    // Create new user
    const newUser = {
      id: Date.now(),
      username: formData.username,
      email: formData.email,
      password: formData.password, // In production, this should be hashed
      createdAt: new Date().toISOString(),
    };

    // Save user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Auto login after signup
    sessionStorage.setItem('currentUser', JSON.stringify(newUser));
    onSignup(newUser);
    onClose();
  };

  return (
    <div className="form-container">
      <h2 className="form-header">SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="signup-username">
            USERNAME:
          </label>
          <input
            type="text"
            id="signup-username"
            name="username"
            className="form-input"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
          />
          {errors.username && (
            <span style={{ color: '#dc1a28', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>
              {errors.username}
            </span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signup-email">
            YOUR EMAIL:
          </label>
          <input
            type="email"
            id="signup-email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
          {errors.email && (
            <span style={{ color: '#dc1a28', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="signup-password">
            PASSWORD:
          </label>
          <input
            type="password"
            id="signup-password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
          {errors.password && (
            <span style={{ color: '#dc1a28', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>
              {errors.password}
            </span>
          )}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="retype-password">
            RE-TYPE PASSWORD:
          </label>
          <input
            type="password"
            id="retype-password"
            name="retypePassword"
            className="form-input"
            value={formData.retypePassword}
            onChange={handleChange}
            required
            placeholder="Re-enter your password"
          />
          {errors.retypePassword && (
            <span style={{ color: '#dc1a28', fontSize: '0.85rem', marginTop: '0.25rem', display: 'block' }}>
              {errors.retypePassword}
            </span>
          )}
        </div>

        <div className="form-actions" style={{ flexDirection: 'column', gap: '1rem' }}>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            <i className="fas fa-user-plus" style={{ marginRight: '0.5rem' }}></i>
            SIGN UP
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onSwitchToLogin}
            style={{ width: '100%' }}
          >
            <i className="fas fa-sign-in-alt" style={{ marginRight: '0.5rem' }}></i>
            Already have an account? LOG IN
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

export default SignupModal;

