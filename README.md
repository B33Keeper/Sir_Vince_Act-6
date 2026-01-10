# Activity 6: Movie Review API + UI

A full-stack application for managing movies and reviews with rating calculations. Users can add reviews and ratings for movies, and the system automatically calculates and displays average ratings per movie.

## Features

- **Backend (NestJS + TypeScript)**:
  - Static movie catalog (15 pre-loaded movies)
  - Automatic database seeding on startup
  - CRUD operations for reviews
  - Automatic average rating calculation per movie
  - Swagger API documentation
  - SQLite database

- **Frontend (ReactJS)**:
  - Display all movies with posters, reviews and average ratings
  - Add reviews with ratings (1-5 stars) for each movie
  - View all reviews for each movie
  - Beautiful, responsive UI with movie poster images

## Technology Stack

- **Backend**: Node.js + NestJS + TypeScript
- **Frontend**: ReactJS
- **Database**: SQLite
- **API Documentation**: Swagger (built-in with NestJS)

## Project Structure

```
.
├── backend/          # NestJS backend application
│   ├── src/
│   │   ├── entities/     # Database entities (Movie, Review)
│   │   ├── dto/          # Data Transfer Objects
│   │   ├── movies/       # Movies module (controller, service, module)
│   │   ├── reviews/      # Reviews module (controller, service, module)
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/        # React frontend application
    ├── src/
    │   ├── components/   # React components
    │   ├── services/     # API service functions
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation & Setup

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run start:dev
   ```

   The backend will run on `http://localhost:3001`
   - API Base URL: `http://localhost:3001`
   - Swagger Documentation: `http://localhost:3001/api`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`

## API Endpoints

### Movies (Read-only)

- `GET /movies` - Get all movies with reviews and average ratings
- `GET /movies/:id` - Get a movie by ID

Note: Movies are static and seeded automatically. They cannot be created, updated, or deleted via API.

### Reviews

- `GET /reviews` - Get all reviews (optional query: `?movieId=1`)
- `GET /reviews/:id` - Get a review by ID
- `POST /reviews` - Create a new review (automatically updates movie rating)
- `PATCH /reviews/:id` - Update a review (recalculates movie rating)
- `DELETE /reviews/:id` - Delete a review (recalculates movie rating)

## Database Schema

### Movie Entity
- `id` (Primary Key)
- `title` (String)
- `director` (String)
- `releaseYear` (Number)
- `description` (Text, optional)
- `imageUrl` (String, optional) - Path to movie poster image
- `averageRating` (Decimal, calculated automatically)

### Review Entity
- `id` (Primary Key)
- `movieId` (Foreign Key)
- `reviewerName` (String)
- `comment` (Text)
- `rating` (Integer, 1-5)
- `createdAt` (DateTime)

## Usage

1. Start both backend and frontend servers (follow installation steps above)

2. The database will automatically seed with 15 static movies on first startup

3. Access the application:
   - Frontend UI: `http://localhost:3000`
   - API Documentation: `http://localhost:3001/api`

4. Features to try:
   - Browse the pre-loaded movie catalog
   - Click "Add Review" on any movie to add a review with rating
   - View average ratings displayed for each movie (auto-calculated)
   - See all reviews listed under each movie

## Movie Images

Movie poster images should be placed in `frontend/public/images/` directory with the following names:
- `the-godfather.jpg`
- `the-shawshank-redemption.jpg`
- `the-dark-knight.jpg`
- `pulp-fiction.jpg`
- `inception.jpg`
- `the-matrix.jpg`
- `titanic.jpg`
- `forrest-gump.jpg`
- `avatar.jpg`
- `gladiator.jpg`
- `schindlers-list.jpg`
- `the-lion-king.jpg`
- `avengers-endgame.jpg`
- `psycho.jpg`
- `star-wars-force-awakens.jpg`

If images are not found, the UI will gracefully hide the image placeholder. You can replace these placeholder paths with actual movie poster images from the internet.

## API Documentation

Swagger documentation is available at `http://localhost:3001/api` when the backend server is running. You can test all API endpoints directly from the Swagger UI.

## Notes

- The database file (`movie_reviews.db`) will be created automatically in the backend directory
- Movies are seeded automatically on first startup (15 static movies)
- When a review is added, updated, or deleted, the movie's average rating is automatically recalculated
- Movies cannot be created, updated, or deleted by users (they are static)
- See `IMAGES_SETUP.md` for instructions on adding movie poster images

## License

MIT

