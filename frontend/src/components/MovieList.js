import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, onAddReview }) => {
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

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (movies.length === 0) {
    return (
      <div className="no-movies">
        <h2>Loading movies...</h2>
        <p>Please wait while we load the movie catalog.</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          {movie.imageUrl && (
            <div className="movie-image-container">
              <img 
                src={movie.imageUrl.replace(/ /g, '%20')} 
                alt={movie.title}
                className="movie-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
          <div className="movie-header">
            <div>
              <h2 className="movie-title">{movie.title}</h2>
              <div className="movie-info">
                <strong>Director:</strong> {movie.director}
              </div>
              <div className="movie-info">
                <strong>Release Year:</strong> {movie.releaseYear}
              </div>
            </div>
          </div>

          {movie.description && (
            <p className="movie-description">{movie.description}</p>
          )}

          <div className="rating-display">
            <span className="rating-star">★</span>
            <span className="rating-value">
              {movie.averageRating > 0
                ? (parseFloat(movie.averageRating) * 2).toFixed(1)
                : '0.0'}
            </span>
            <span className="rating-text">/10</span>
            <span className="rating-reviews">
              ({movie.reviews?.length || 0} review{movie.reviews?.length !== 1 ? 's' : ''})
            </span>
          </div>

          <div className="movie-actions">
            <button
              className="btn btn-success"
              onClick={() => onAddReview(movie)}
            >
              <i className="fas fa-plus-circle" style={{ marginRight: '0.5rem' }}></i>
              Add Review
            </button>
          </div>

          <div className="reviews-section">
            <div className="reviews-header">
              <h3 className="reviews-title">Reviews</h3>
            </div>
            {movie.reviews && movie.reviews.length > 0 ? (
              <div className="reviews-list">
                {movie.reviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <span className="reviewer-name">{review.reviewerName}</span>
                      <span className="review-rating">
                        ★{review.rating * 2}/10
                      </span>
                    </div>
                    <p className="review-comment">{review.comment}</p>
                    <div className="review-date">
                      {formatDate(review.createdAt)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-reviews">No reviews yet. Be the first to review!</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

