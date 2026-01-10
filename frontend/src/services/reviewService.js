import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getReviews = async (movieId = null) => {
  const url = movieId ? `/reviews?movieId=${movieId}` : '/reviews';
  const response = await api.get(url);
  return response.data;
};

export const getReview = async (id) => {
  const response = await api.get(`/reviews/${id}`);
  return response.data;
};

export const createReview = async (reviewData) => {
  const response = await api.post('/reviews', reviewData);
  return response.data;
};

export const updateReview = async (id, reviewData) => {
  const response = await api.patch(`/reviews/${id}`, reviewData);
  return response.data;
};

export const deleteReview = async (id) => {
  const response = await api.delete(`/reviews/${id}`);
  return response.data;
};

