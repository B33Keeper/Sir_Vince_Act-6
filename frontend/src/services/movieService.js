import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getMovies = async () => {
  const response = await api.get('/movies');
  return response.data;
};

export const getMovie = async (id) => {
  const response = await api.get(`/movies/${id}`);
  return response.data;
};

export const createMovie = async (movieData) => {
  const response = await api.post('/movies', movieData);
  return response.data;
};

export const updateMovie = async (id, movieData) => {
  const response = await api.patch(`/movies/${id}`, movieData);
  return response.data;
};

export const deleteMovie = async (id) => {
  const response = await api.delete(`/movies/${id}`);
  return response.data;
};

