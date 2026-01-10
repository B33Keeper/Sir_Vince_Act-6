# Quick Start Guide

## Installation (One-time setup)

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## Running the Application

### Terminal 1 - Backend
```bash
cd backend
npm run start:dev
```
Backend runs on: http://localhost:3001
Swagger docs: http://localhost:3001/api

### Terminal 2 - Frontend
```bash
cd frontend
npm start
```
Frontend runs on: http://localhost:3000

## First Steps

1. **Add a Movie**: Click "+ Add New Movie" button
2. **Add a Review**: Click "+ Add Review" on any movie
3. **View Ratings**: Average ratings are calculated automatically
4. **Test API**: Visit http://localhost:3001/api for Swagger UI

## Troubleshooting

- **Port 3001 in use?** Change PORT in `backend/src/main.ts`
- **Port 3000 in use?** React will prompt you to use a different port
- **CORS errors?** Make sure backend is running first
- **Database issues?** Delete `backend/movie_reviews.db` and restart backend

