import React from 'react';
import './MovieDetailModal.css';

const MovieDetailModal = ({ movie, onClose, onAddReview }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <span className="rating-stars">
        {'★'.repeat(fullStars)}
        {hasHalfStar && '½'}
        {'☆'.repeat(emptyStars)}
      </span>
    );
  };

  return (
    <div className="movie-detail-modal-overlay" onClick={onClose}>
      <div className="movie-detail-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="movie-detail-close-btn" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>

        <div className="movie-detail-container">
          {/* Movie Image */}
          {movie.imageUrl && (
            <div className="movie-detail-image-section">
              <img
                src={movie.imageUrl.replace(/ /g, '%20')}
                alt={movie.title}
                className="movie-detail-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}

          {/* Movie Info Section */}
          <div className="movie-detail-info-section">
            <h1 className="movie-detail-title">{movie.title}</h1>
            
            <div className="movie-detail-meta">
              <div className="movie-detail-meta-item">
                <i className="fas fa-user-tie"></i>
                <span><strong>Director:</strong> {movie.director}</span>
              </div>
              <div className="movie-detail-meta-item">
                <i className="fas fa-calendar-alt"></i>
                <span><strong>Release Year:</strong> {movie.releaseYear}</span>
              </div>
              <div className="movie-detail-meta-item">
                <i className="fas fa-star"></i>
                <span>
                  <strong>Average Rating:</strong>{' '}
                  <span className="movie-detail-rating">
                    ★{movie.averageRating > 0 ? (parseFloat(movie.averageRating) * 2).toFixed(1) : '0.0'}/10
                  </span>
                  {movie.reviews?.length > 0 && (
                    <span className="movie-detail-review-count">
                      {' '}({movie.reviews.length} review{movie.reviews.length !== 1 ? 's' : ''})
                    </span>
                  )}
                </span>
              </div>
            </div>

            {movie.description && (
              <div className="movie-detail-description">
                <h3>Description</h3>
                <p>{movie.description}</p>
              </div>
            )}

            <div className="movie-detail-actions">
              <button className="btn btn-primary" onClick={() => onAddReview(movie)}>
                <i className="fas fa-plus-circle" style={{ marginRight: '0.5rem' }}></i>
                Add Review
              </button>
            </div>

            {/* Reviews Section */}
            <div className="movie-detail-reviews-section">
              <h2 className="reviews-section-title">
                <i className="fas fa-comments" style={{ marginRight: '0.5rem' }}></i>
                Reviews ({movie.reviews?.length || 0})
              </h2>

              {movie.reviews && movie.reviews.length > 0 ? (
                <div className="reviews-list-container">
                  {[...movie.reviews]
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .map((review) => (
                    <div key={review.id} className="review-card">
                      <div className="review-card-header">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            <i className="fas fa-user"></i>
                          </div>
                          <div className="reviewer-details">
                            <span className="reviewer-name">{review.reviewerName}</span>
                            <span className="review-date">{formatDate(review.createdAt)}</span>
                          </div>
                        </div>
                        <div className="review-rating-badge">
                          {renderStars(review.rating)}
                          <span className="review-rating-value">★{review.rating * 2}/10</span>
                        </div>
                      </div>
                      <div className="review-card-body">
                        <p className="review-comment-text">{review.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-reviews-message">
                  <i className="fas fa-comment-slash"></i>
                  <p>No reviews yet. Be the first to review this movie!</p>
                  <button className="btn btn-primary" onClick={() => onAddReview(movie)}>
                    <i className="fas fa-plus-circle" style={{ marginRight: '0.5rem' }}></i>
                    Add First Review
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;

