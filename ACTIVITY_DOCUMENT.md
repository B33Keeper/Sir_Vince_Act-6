# Activity 6: Movie Review API + UI - Activity Document

## Title of Activity

**Movie Review API + UI**

## Short Description

This application allows users to manage movies and their reviews. Users can add movies to the database, create reviews with ratings (1-5 stars) for each movie, and view the automatically calculated average rating for each movie. The system provides full CRUD (Create, Read, Update, Delete) functionality for both movies and reviews, with a user-friendly web interface built with React and a robust REST API built with NestJS.

### What the app does:

- **Movie Management**: Users can add new movies with details like title, director, release year, and description. Movies can be edited and deleted.
- **Review System**: Users can add reviews for movies, including the reviewer's name, a comment, and a rating from 1 to 5 stars.
- **Rating Calculation**: The system automatically calculates and displays the average rating for each movie based on all its reviews. When reviews are added, updated, or deleted, the average rating is recalculated in real-time.
- **Visual Display**: The frontend displays all movies in a card-based layout, showing movie details, average ratings with star displays, and all associated reviews.

## Screenshots

> **Note**: Please take screenshots of your working system and add them here. Include:
> 1. Screenshot of the main UI showing movies and reviews
> 2. Screenshot of adding a new movie
> 3. Screenshot of adding a review
> 4. Screenshot of the Swagger API documentation at `http://localhost:3001/api`
> 5. Screenshot of API example (using Swagger or Postman)

### Example Screenshot Locations:
- Main UI: `http://localhost:3000`
- Swagger API: `http://localhost:3001/api`
- API Testing: Use Swagger UI or Postman to test endpoints

## Instructions on How to Run the Project

### Prerequisites
- Node.js (v16 or higher) installed on your system
- npm (Node Package Manager) or yarn

### Step 1: Clone or Download the Project
1. Ensure you have the project files in your workspace
2. Navigate to the project root directory

### Step 2: Set Up and Run the Backend

1. Open a terminal/command prompt
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install backend dependencies:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   npm run start:dev
   ```
5. Wait for the server to start. You should see:
   ```
   Application is running on: http://localhost:3001
   Swagger API documentation: http://localhost:3001/api
   ```
6. Keep this terminal window open (the server must keep running)

### Step 3: Set Up and Run the Frontend

1. Open a **new** terminal/command prompt window
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install frontend dependencies:
   ```bash
   npm install
   ```
4. Start the frontend development server:
   ```bash
   npm start
   ```
5. Your default web browser should automatically open to `http://localhost:3000`
   - If it doesn't open automatically, manually navigate to `http://localhost:3000`

### Step 4: Using the Application

1. **View Movies**: The main page displays all movies (initially empty)
2. **Add a Movie**: 
   - Click the "+ Add New Movie" button
   - Fill in the form (Title, Director, Release Year, Description)
   - Click "Create Movie"
3. **Add a Review**:
   - Click "+ Add Review" on any movie card
   - Enter your name, select a rating (1-5 stars), and write a comment
   - Click "Submit Review"
   - Notice the average rating updates automatically
4. **Edit/Delete**: Use the "Edit" or "Delete" buttons on movie cards

### Step 5: View API Documentation

1. Open your web browser
2. Navigate to `http://localhost:3001/api`
3. You'll see the Swagger UI with all available API endpoints
4. You can test the APIs directly from the Swagger interface

### Troubleshooting

**Backend won't start:**
- Make sure port 3001 is not already in use
- Check that all dependencies are installed (`npm install` in backend folder)
- Verify Node.js version is 16 or higher

**Frontend won't start:**
- Make sure port 3000 is not already in use
- Check that all dependencies are installed (`npm install` in frontend folder)
- Ensure the backend is running first

**API calls fail:**
- Verify the backend server is running on `http://localhost:3001`
- Check browser console for error messages
- Verify CORS is enabled (should be configured in `backend/src/main.ts`)

**Database issues:**
- The SQLite database file (`movie_reviews.db`) is created automatically
- If you need to reset, delete the database file and restart the backend

### Stopping the Servers

- In both terminal windows, press `Ctrl + C` (or `Cmd + C` on Mac) to stop the servers

## Technology Stack Summary

- **Backend**: NestJS, TypeScript, TypeORM, SQLite
- **Frontend**: React, JavaScript, Axios
- **API Documentation**: Swagger/OpenAPI (built-in with NestJS)
- **Database**: SQLite (file-based, no separate database server required)

## API Endpoints Summary

### Movies
- `GET /movies` - Get all movies with reviews
- `GET /movies/:id` - Get a specific movie
- `POST /movies` - Create a new movie
- `PATCH /movies/:id` - Update a movie
- `DELETE /movies/:id` - Delete a movie

### Reviews
- `GET /reviews` - Get all reviews (or filter by `?movieId=1`)
- `GET /reviews/:id` - Get a specific review
- `POST /reviews` - Create a new review
- `PATCH /reviews/:id` - Update a review
- `DELETE /reviews/:id` - Delete a review

---

**Note**: This document should be saved as a `.docx` file for submission. You can copy this content into Microsoft Word or Google Docs and format it as needed, adding your actual screenshots.

