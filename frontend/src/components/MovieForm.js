import React, { useState, useEffect } from 'react';
import './Form.css';

const MovieForm = ({ movie, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    releaseYear: new Date().getFullYear(),
    description: '',
  });

  useEffect(() => {
    if (movie) {
      setFormData({
        title: movie.title || '',
        director: movie.director || '',
        releaseYear: movie.releaseYear || new Date().getFullYear(),
        description: movie.description || '',
      });
    }
  }, [movie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'releaseYear' ? parseInt(value) || '' : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form-container">
      <h2 className="form-header">
        {movie ? 'Edit Movie' : 'Add New Movie'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="title">
            Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter movie title"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="director">
            Director *
          </label>
          <input
            type="text"
            id="director"
            name="director"
            className="form-input"
            value={formData.director}
            onChange={handleChange}
            required
            placeholder="Enter director name"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="releaseYear">
            Release Year *
          </label>
          <input
            type="number"
            id="releaseYear"
            name="releaseYear"
            className="form-input"
            value={formData.releaseYear}
            onChange={handleChange}
            required
            min="1888"
            max={new Date().getFullYear() + 10}
            placeholder="Enter release year"
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-textarea"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter movie description (optional)"
            rows="4"
          />
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {movie ? 'Update Movie' : 'Create Movie'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;

