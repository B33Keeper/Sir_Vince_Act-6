import React, { useState } from 'react';
import { createReview } from '../services/reviewService';
import './Form.css';

const ReviewForm = ({ movieId, movieTitle, currentUser, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    reviewerName: currentUser?.username || '',
    comment: '',
    rating: 5,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createReview({
        movieId,
        ...formData,
      });
      onSubmit();
    } catch (error) {
      console.error('Error creating review:', error);
      alert('Failed to create review. Please check the console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="form-container">
      <h2 className="form-header">ADD REVIEW</h2>
      <p style={{ marginBottom: '1.5rem', color: '#666', fontSize: '0.9rem' }}>for "{movieTitle}"</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="reviewerName">
            USERNAME *
          </label>
          <input
            type="text"
            id="reviewerName"
            name="reviewerName"
            className="form-input"
            value={formData.reviewerName}
            onChange={handleChange}
            required
            placeholder={currentUser ? currentUser.username : "Enter your name"}
            readOnly={!!currentUser}
            style={currentUser ? { backgroundColor: '#f5f5f5', cursor: 'not-allowed' } : {}}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="rating">
            RATING * ({formData.rating}/5)
          </label>
          <div style={{ marginBottom: '0.5rem' }}>
            <span className="rating-stars" style={{ fontSize: '1.5rem' }}>
              {renderStars(formData.rating)}
            </span>
          </div>
          <input
            type="range"
            id="rating"
            name="rating"
            className="form-input"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
          <div className="rating-display-range">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="comment">
            COMMENT *
          </label>
          <textarea
            id="comment"
            name="comment"
            className="form-textarea"
            value={formData.comment}
            onChange={handleChange}
            required
            placeholder="Write your review here..."
            rows="6"
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            <i className="fas fa-times" style={{ marginRight: '0.5rem' }}></i>
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin" style={{ marginRight: '0.5rem' }}></i>
                SUBMITTING...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane" style={{ marginRight: '0.5rem' }}></i>
                SUBMIT REVIEW
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

