# Movie Review API - Backend

NestJS backend API for managing movies and reviews with automatic rating calculations.

## Installation

```bash
npm install
```

## Running the app

```bash
# development
npm run start:dev

# production mode
npm run start:prod
```

## API Endpoints

### Movies
- `GET /movies` - Get all movies
- `GET /movies/:id` - Get movie by ID
- `POST /movies` - Create movie
- `PATCH /movies/:id` - Update movie
- `DELETE /movies/:id` - Delete movie

### Reviews
- `GET /reviews` - Get all reviews (optional: `?movieId=1`)
- `GET /reviews/:id` - Get review by ID
- `POST /reviews` - Create review (updates movie rating)
- `PATCH /reviews/:id` - Update review (recalculates rating)
- `DELETE /reviews/:id` - Delete review (recalculates rating)

## Swagger Documentation

Visit `http://localhost:3001/api` when the server is running.

## Database

Uses SQLite database (`movie_reviews.db`) which is created automatically.

