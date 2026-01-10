# Troubleshooting Guide

## Issue: "Loading movies..." Stuck

If your app is stuck on the loading screen, follow these steps:

### Step 1: Check if Backend is Running

1. Open a terminal/command prompt
2. Navigate to the backend directory:
   ```bash
   cd "C:\Users\Silv\Desktop\Sir Vince Act 6\backend"
   ```
3. Start the backend server:
   ```bash
   npm run start:dev
   ```
4. You should see:
   - "✅ Seeded 13 movies successfully!" (on first run)
   - "Application is running on: http://localhost:3001"
   - "Swagger API documentation: http://localhost:3001/api"

### Step 2: Verify Backend is Working

1. Open your web browser
2. Navigate to: `http://localhost:3001/api`
3. You should see the Swagger API documentation page
4. If this doesn't load, the backend is not running correctly

### Step 3: Check Frontend Connection

1. Make sure the frontend is running on `http://localhost:3000`
2. Open browser Developer Tools (F12)
3. Go to the Console tab
4. Look for any error messages related to:
   - "Failed to fetch"
   - "CORS"
   - "Network error"
   - Connection refused

### Step 4: Reset Database (if needed)

If you need to reset the database to get the new Marvel movies:

1. Stop the backend server (Ctrl+C)
2. Navigate to the backend directory
3. Delete the database file:
   ```bash
   # Windows PowerShell
   Remove-Item movie_reviews.db -ErrorAction SilentlyContinue
   ```
4. Restart the backend server
5. The seeder will automatically create the database and seed 13 Marvel movies

### Step 5: Common Issues

**Issue: Port 3001 already in use**
- Solution: Change the port in `backend/src/main.ts` (line 42) or stop the process using port 3001

**Issue: CORS errors**
- Solution: Make sure CORS is enabled in `backend/src/main.ts` (should already be configured)

**Issue: Database not seeding**
- Solution: Check backend console for error messages. The seeder runs automatically on startup.

**Issue: Images not showing**
- Solution: Make sure image files are in `frontend/public/images/` with the exact filenames used in the seeder

## Testing the API Directly

You can test if the backend is working by using curl or your browser:

```bash
# Test GET /movies endpoint
curl http://localhost:3001/movies

# Or open in browser:
http://localhost:3001/movies
```

You should see a JSON array with 13 Marvel movies.

## Image File Names

Make sure your image files match these exact names (with spaces as shown):
- `iron man.jpg`
- `iron man 2.jpg`
- `iron man 3.jpg`
- `the hulk.jpg`
- `captain america.jpg`
- `thor.jpg`
- `avengers.jpg`
- `guardians-of-the-galaxy.jpg`
- `ant-man.jpg`
- `captain-america-civil-war.jpg`
- `spider-man-homecoming.jpg`
- `spider-man-into-the-spider-verse.jpg`
- `spider-man-far-from-home.jpg`

