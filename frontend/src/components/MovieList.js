import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, onAddReview, onMovieClick, showEmptyMessage = true }) => {

  if (movies.length === 0) {
    if (!showEmptyMessage) {
      return null;
    }
    return (
      <div className="no-movies">
        <h2>No items found</h2>
        <p>There are no items to display at the moment.</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div 
          key={movie.id} 
          className="movie-card"
          onClick={() => onMovieClick(movie)}
        >
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
              <div className="movie-card-overlay">
                <div className="movie-card-overlay-content">
                  <i className="fas fa-eye"></i>
                  <span>View Details</span>
                </div>
              </div>
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
            <p className="movie-description">
              {movie.description.length > 120 
                ? movie.description.substring(0, 120) + '...' 
                : movie.description}
            </p>
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
              onClick={(e) => {
                e.stopPropagation();
                onAddReview(movie);
              }}
            >
              <i className="fas fa-plus-circle" style={{ marginRight: '0.5rem' }}></i>
              Add Review
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

