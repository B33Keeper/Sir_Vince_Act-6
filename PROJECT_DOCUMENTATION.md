# Activity 6: Movie Review Platform

The Movie Review Platform is a web application designed to allow users to explore movies, read reviews from other users, and share their own opinions through reviews and ratings. It provides a simple and interactive way for movie enthusiasts to discover and discuss films.

---

## What This Application Does

Think of this application like a digital movie review magazine combined with a community forum. Users can:

- **Browse Movies**: View a collection of pre-loaded movies with details like title, director, release year, and descriptions
- **Read Reviews**: See what other users think about each movie
- **Share Opinions**: Write your own reviews and rate movies from 1 to 5 stars
- **See Ratings**: View average ratings that are automatically calculated from all user reviews
- **Create Accounts**: Sign up and log in to personalize your experience

---

## Key Terms Explained (Simple Definitions)

**Backend**: The "behind-the-scenes" part of the application that handles data storage, calculations, and serves information to the frontend. Think of it as the kitchen of a restaurant - customers don't see it, but it's where all the work happens.

**Frontend**: The visual part of the application that users interact with in their web browser. This is like the dining room of a restaurant - it's what users see and use.

**Database**: A digital storage system that saves all the information (movies, reviews, user accounts) permanently. Like a filing cabinet that remembers everything even after you close the application.

**API (Application Programming Interface)**: A way for the frontend to communicate with the backend. Like a waiter who takes your order (frontend request) to the kitchen (backend) and brings back your food (data).

**Server**: A computer program that runs continuously and responds to requests. The backend runs on a server that's always waiting to handle requests.

**Rating**: A number from 1 to 5 stars that users give to express how much they liked a movie (1 = didn't like it, 5 = loved it).

**Average Rating**: A calculated score that shows the average of all user ratings for a movie. For example, if three users rate a movie 4, 5, and 3 stars, the average is 4 stars.

**SQLite Database**: A type of database that stores all data in a single file on your computer. It's simple and doesn't require a separate database program to run.

**Swagger Documentation**: An interactive webpage that shows all available API functions and lets you test them directly in your browser.

---

## Steps in Showing Functionality

### Home Page Interface

Upon opening the Movie Review Platform, users are greeted with a modern and visually appealing homepage that displays the movie catalog.

At the top, the "BLOCK BUSTER" label functions as a logo, representing the identity of the platform. It is accompanied by navigation buttons for logging in or signing up.

The main page displays movie cards in a grid layout, each showing:
- Movie poster image
- Movie title
- Director name
- Release year
- Average rating (displayed as stars out of 10)
- Number of reviews
- An "Add Review" button

Users can click anywhere on a movie card to view detailed information about that movie.

### Sign-Up Functionality

This allows new users to create an account and join the Movie Review Platform community. It features a clean, centered form layout that appears in a pop-up window (modal) over the main page.

This form includes the following input fields:

- **Username** – A unique name chosen by the user to identify themselves on the platform. Must be at least 3 characters long.

- **Email** – The user's email address, which must be in a valid email format (e.g., user@example.com).

- **Password** – The user's chosen secure password. Must be at least 6 characters long for security.

- **Re-type Password** – A confirmation field to ensure the password was entered correctly and prevent typing mistakes.

The form includes validation to ensure all information is entered correctly. If a username already exists, the system will notify the user to choose a different one.

Once all fields are filled correctly, clicking the "SIGN UP" button creates a new user account and automatically logs the user into the platform. At the bottom, there's also an "Already have an account? LOG IN" link, allowing existing users to quickly switch to the login form.

### Login Functionality

This allows registered users to securely access their accounts within the Movie Review Platform. It maintains the same aesthetic design as the sign-up page, featuring a clean, centered login form in a pop-up window.

This form includes the following input fields:

- **Username** – The username that was used during registration.

- **Password** – The password associated with the account.

Below the password field, there's a "Remember me" checkbox that allows users to stay logged in even after closing the browser.

Below the input fields, a "LOGIN" button is provided to verify the user's credentials and grant access to the main movie review interface upon successful verification.

Additionally, a "Don't have an account? SIGN UP" link is available, allowing new users to easily navigate to the sign-up form if they don't have an account yet.

### Browsing Movies

The main interface displays all available movies in an attractive card-based layout. Each movie card shows:

- **Movie Poster** – A visual image representing the movie
- **Movie Title** – The name of the film
- **Director** – The person who directed the movie
- **Release Year** – The year the movie was released
- **Description** – A brief summary of the movie's plot (truncated if too long)
- **Average Rating** – Displayed as a number out of 10, calculated from all user reviews
- **Review Count** – The number of reviews submitted for this movie

Users can click anywhere on a movie card to open a detailed view with complete information about that movie.

### Viewing Movie Details

When a user clicks on a movie card, a detailed view appears in a pop-up window (modal) showing:

- **Full Movie Poster** – Large display of the movie image
- **Complete Movie Information** – Title, director, release year
- **Full Description** – The complete plot summary
- **Average Rating** – The calculated average rating with the total number of reviews
- **All Reviews** – A list of all reviews submitted for this movie, showing:
  - Reviewer's name
  - Rating given (out of 5 stars)
  - Comment or review text
  - Date when the review was posted
- **Add Review Button** – Allows logged-in users to add their own review

This detailed view provides comprehensive information about the movie and all user feedback in one place.

### Adding a Review

After successfully logging in, users can add reviews for any movie. The review form appears in a pop-up window when the "Add Review" button is clicked.

The review form allows users to share their opinion with the following fields:

- **Your Name** – The name that will appear with the review (typically the logged-in username)
- **Rating** – A selection of 1 to 5 stars to rate the movie (1 = Poor, 5 = Excellent)
- **Comment** – A text area for writing a detailed review or comment about the movie

Once the form is completed, clicking the "Submit Review" button saves the review to the database. The system automatically:
- Adds the review to the movie's review list
- Recalculates the movie's average rating based on all reviews (including the new one)
- Updates the displayed rating on the movie card

If a user tries to add a review without being logged in, they will be prompted to log in first.

### Searching and Filtering Movies

The platform includes a search bar at the top of the page that allows users to search for movies by:
- Movie title
- Director name
- Description keywords

Additionally, filter buttons are available to sort movies by:
- **POPULAR** – Shows all movies (default view)
- **NEW RELEASES** – Filters movies by recent release years
- **HIGHEST RATED** – Sorts movies by their average rating (highest first)

These features help users quickly find movies they're interested in.

---

## API Connectivity Testing

The application includes an API (Application Programming Interface) that allows the frontend to communicate with the backend. This section explains how to test these connections.

**What is an API?** Think of an API as a waiter in a restaurant. The frontend (you) makes a request (orders food), and the API (waiter) takes it to the backend (kitchen) and brings back the response (your food/data).

**What is an Endpoint?** An endpoint is a specific function or service that the API provides. Each endpoint has a URL (web address) and performs a specific task, like getting all movies or creating a review.

**What is a Method?** The method describes what action you want to perform:
- **GET** – Retrieve or read information (like getting a list of movies)
- **POST** – Create new information (like adding a new review)
- **PATCH** – Update existing information (like editing a review)
- **DELETE** – Remove information (like deleting a review)

**What is a Response Status?** This is a code that indicates whether the request was successful:
- **200 OK** – Request was successful
- **201 Created** – New item was successfully created
- **404 Not Found** – The requested item doesn't exist
- **401 Unauthorized** – Authentication is required

**What is Response Time?** The amount of time (in milliseconds) it takes for the server to process and respond to a request. Lower is better.

**What is Payload Size?** The amount of data (in bytes) being sent or received. Like the size of a package being delivered.

### User Registration (Sign Up)

This test validates the user registration functionality through a POST request to the `/users` endpoint, demonstrating the API's ability to create new user accounts in the system.

**Endpoint Details:**
- **Method**: POST (Create new user)
- **URL**: `http://localhost:3001/users`
- **Content-Type**: application/json (raw JSON format)
- **Response Status**: 201 Created (user successfully created)
- **Expected Response Time**: Usually under 200ms
- **Payload Size**: Approximately 150-200 bytes

**What This Does**: When a user fills out the sign-up form and clicks "SIGN UP", the frontend sends this request to create a new account in the database.

### User Login

This test validates the user authentication functionality through a POST request to the `/users/login` endpoint, demonstrating the API's ability to verify user credentials and allow access to the platform.

**Endpoint Details:**
- **Method**: POST (Submit login credentials)
- **URL**: `http://localhost:3001/users/login`
- **Content-Type**: application/json (raw JSON format)
- **Response Status**: 200 OK (login successful)
- **Expected Response Time**: Usually under 100ms
- **Payload Size**: Approximately 100-150 bytes

**What This Does**: When a user enters their username and password and clicks "LOGIN", this request verifies their credentials and grants access if correct.

### Get All Users

This test validates the retrieval of all user accounts through a GET request to the `/users` endpoint, demonstrating the API's ability to fetch user information.

**Endpoint Details:**
- **Method**: GET (Retrieve information)
- **URL**: `http://localhost:3001/users`
- **Authentication**: Not Required (Public endpoint)
- **Response Status**: 200 OK
- **Expected Response Time**: Usually under 50ms
- **Payload Size**: Varies based on number of users

**What This Does**: Retrieves a list of all registered user accounts in the system. Useful for administrative purposes or displaying user information.

### Get a Single User

This test validates retrieving a specific user's details through a GET request to the `/users/:id` endpoint, where `:id` is the user's unique identifier.

**Endpoint Details:**
- **Method**: GET (Retrieve information)
- **URL**: `http://localhost:3001/users/1` (example: user with ID 1)
- **Path Parameter**: `id=1` (the unique number that identifies the user)
- **Authentication**: Not Required (Public endpoint)
- **Response Status**: 200 OK
- **Expected Response Time**: Usually under 30ms
- **Payload Size**: Approximately 200-300 bytes per user

**What This Does**: Fetches detailed information about a specific user account, including username, email, and account creation date.

### Update a User

This test validates the user update functionality through a PATCH request to the `/users/:id` endpoint, demonstrating the API's ability to modify user account information.

**Endpoint Details:**
- **Method**: PATCH (Update existing item)
- **URL**: `http://localhost:3001/users/1` (example: update user with ID 1)
- **Path Parameter**: `id=1` (the unique number that identifies the user to update)
- **Content-Type**: application/json (raw JSON format)
- **Authentication**: Not Required
- **Response Status**: 200 OK
- **Expected Response Time**: Usually under 100ms
- **Payload Size**: Approximately 200-300 bytes

**What This Does**: Allows users to update their account information, such as username, email, or password. The system checks to ensure usernames and emails remain unique.

### Delete a User

This test validates the user deletion functionality through a DELETE request to the `/users/:id` endpoint, demonstrating the API's ability to remove user accounts.

**Endpoint Details:**
- **Method**: DELETE (Remove item)
- **URL**: `http://localhost:3001/users/1` (example: delete user with ID 1)
- **Path Parameter**: `id=1` (the unique number that identifies the user to delete)
- **Authentication**: Not Required
- **Response Status**: 200 OK
- **Expected Response Time**: Usually under 80ms
- **Payload Size**: Minimal (confirmation response)

**What This Does**: Permanently removes a user account from the database. Use with caution as this action cannot be undone.

### Get All Movies

This test validates the retrieval of all movies through a GET request to the `/movies` endpoint, demonstrating the API's ability to fetch the complete movie catalog.

**Endpoint Details:**
- **Method**: GET (Retrieve information)
- **URL**: `http://localhost:3001/movies`
- **Authentication**: Not Required (Public endpoint - anyone can view movies)
- **Response Status**: 200 OK
- **Expected Response Time**: Usually under 50ms
- **Payload Size**: Varies based on number of movies (typically 10-50 KB for 13 movies)

**What This Does**: When the homepage loads, this request retrieves all movies from the database to display on the screen.

### Get a Single Movie

This test validates retrieving a specific movie's details through a GET request to the `/movies/:id` endpoint, where `:id` is the movie's unique identifier.

**Endpoint Details:**
- **Method**: GET (Retrieve information)
- **URL**: `http://localhost:3001/movies/1` (example: movie with ID 1)
- **Path Parameter**: `id=1` (the unique number that identifies the movie)
- **Authentication**: Not Required (Public endpoint)
- **Response Status**: 200 OK
- **Expected Response Time**: Usually under 30ms
- **Payload Size**: Approximately 500-1000 bytes per movie

**What This Does**: When a user clicks on a movie card to view details, this request fetches complete information about that specific movie, including all its reviews.

### Create a Review

This test validates the review creation functionality through a POST request to the `/reviews` endpoint, demonstrating the API's ability to save user reviews and automatically update movie ratings.

**Endpoint Details:**
- **Method**: POST (Create new review)
- **URL**: `http://localhost:3001/reviews`
- **Content-Type**: application/json (raw JSON format)
- **Authentication**: Not Required (Reviews can be created by anyone)
- **Response Status**: 201 Created
- **Expected Response Time**: Usually under 100ms
- **Payload Size**: Approximately 200-400 bytes

**What This Does**: When a user submits a review form, this request saves the review to the database and automatically recalculates the movie's average rating.

**Important**: After creating a review, the system automatically updates the movie's average rating based on all reviews for that movie.

### Get All Reviews

This test validates the retrieval of all reviews through a GET request to the `/reviews` endpoint, demonstrating the API's ability to fetch user reviews.

**Endpoint Details:**
- **Method**: GET (Retrieve information)
- **URL**: `http://localhost:3001/reviews`
- **Authentication**: Not Required (Public endpoint)
- **Response Status**: 200 OK
- **Expected Response Time**: Usually under 50ms
- **Payload Size**: Varies based on number of reviews

**Optional Query Parameter**: You can filter reviews by adding `?movieId=1` to the URL to get only reviews for a specific movie.

**What This Does**: This retrieves all reviews from all movies. Used when displaying review lists or statistics.

### Get Reviews for a Specific Movie

This test validates retrieving reviews filtered by movie through a GET request with a query parameter.

**Endpoint Details:**
- **Method**: GET (Retrieve information)
- **URL**: `http://localhost:3001/reviews?movieId=1` (example: reviews for movie ID 1)
- **Query Parameter**: `movieId=1` (filters to show only reviews for movie with ID 1)
- **Authentication**: Not Required (Public endpoint)
- **Response Status**: 200 OK
- **Expected Response Time**: Usually under 40ms
- **Payload Size**: Varies based on number of reviews for that movie

**What This Does**: When viewing a movie's detail page, this request fetches only the reviews related to that specific movie.

### Update a Review

This test validates the review update functionality through a PATCH request to the `/reviews/:id` endpoint, demonstrating the API's ability to modify existing reviews and recalculate ratings.

**Endpoint Details:**
- **Method**: PATCH (Update existing item)
- **URL**: `http://localhost:3001/reviews/1` (example: update review with ID 1)
- **Path Parameter**: `id=1` (the unique number that identifies the review to update)
- **Content-Type**: application/json (raw JSON format)
- **Authentication**: Not Required
- **Response Status**: 200 OK
- **Expected Response Time**: Usually under 100ms
- **Payload Size**: Approximately 200-400 bytes

**What This Does**: Allows users to edit their reviews (change the rating or comment). After updating, the movie's average rating is automatically recalculated.

### Delete a Review

This test validates the review deletion functionality through a DELETE request to the `/reviews/:id` endpoint, demonstrating the API's ability to remove reviews and recalculate ratings.

**Endpoint Details:**
- **Method**: DELETE (Remove item)
- **URL**: `http://localhost:3001/reviews/1` (example: delete review with ID 1)
- **Path Parameter**: `id=1` (the unique number that identifies the review to delete)
- **Authentication**: Not Required
- **Response Status**: 200 OK
- **Expected Response Time**: Usually under 80ms
- **Payload Size**: Minimal (confirmation response)

**What This Does**: Permanently removes a review from the database. After deletion, the movie's average rating is automatically recalculated based on remaining reviews.

---

## Project Setup Guide

Complete documentation for setting up and running the Movie Review Platform application.

### Prerequisites

Before you begin, you need to have the following installed on your computer:

- **Node.js** (version 16 or higher) – A program that allows you to run JavaScript applications. You can download it from nodejs.org
- **npm** (Node Package Manager) – Comes automatically with Node.js. It's a tool that downloads and installs all the code libraries the application needs to work.

**How to Check if You Have Node.js:**
1. Open a terminal/command prompt (Windows: Search for "Command Prompt" or "PowerShell", Mac/Linux: Search for "Terminal")
2. Type: `node --version`
3. If you see a version number (like v18.0.0), you have Node.js installed
4. If you see an error, download and install Node.js from nodejs.org

### Installation (One-Time Setup)

This is a one-time setup process. Once completed, you can run the application anytime.

#### Step 1: Navigate to the Backend Folder

1. Open a terminal/command prompt
2. Navigate to the backend directory using the `cd` command:
   ```bash
   cd backend
   ```
   **Note**: Make sure you're in the correct folder. The path should look something like: `C:\Users\YourName\Desktop\Sir Vince Act 6\backend`

#### Step 2: Install Backend Dependencies

In the backend folder, type:
```bash
npm install
```

**What This Does**: This command downloads and installs all the code libraries (called "packages" or "dependencies") that the backend needs to function. This may take 1-2 minutes.

**You'll Know It's Done When**: You see a message saying "added X packages" and the command prompt is ready for your next command.

#### Step 3: Navigate to the Frontend Folder

1. Open a **new** terminal/command prompt window (keep the backend one open)
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

#### Step 4: Install Frontend Dependencies

In the frontend folder, type:
```bash
npm install
```

**What This Does**: This downloads and installs all the code libraries needed for the frontend (the visual part users see). This may also take 1-2 minutes.

**You'll Know It's Done When**: You see a message saying "added X packages" and the command prompt is ready.

---

### Database Setup

**What is a Database?** A database is like a digital filing cabinet that stores all your information (movies, reviews, user accounts) in an organized way so it can be retrieved quickly.

**SQLite Database**: This application uses SQLite, which is a simple type of database that stores everything in a single file. The good news is that you don't need to set up anything special – the database file is created automatically when you first run the backend!

**Database File Location**: The database file (`movie_reviews.db`) will be created automatically in the `backend` folder when you start the backend server for the first time.

**Initial Data (Seeding)**: When you start the backend for the first time (when the database is empty), it automatically loads 13 pre-configured Marvel movies into the database. This process is called "seeding."

---

### Running the Application

Once installation is complete, you need to run both the backend and frontend servers. You'll need **two separate terminal windows** – one for the backend and one for the frontend.

#### Step 1: Start the Backend Server

1. In your first terminal window, make sure you're in the backend directory:
   ```bash
   cd backend
   ```
   (If you're already there, you can skip this step)

2. Start the backend server:
   ```bash
   npm run start:dev
   ```

**What This Does**: This starts the backend server, which handles all the data storage and API requests.

**You'll Know It's Working When**: You see messages like:
- "✅ Seeded 13 movies successfully!" (on first run only)
- "Application is running on: http://localhost:3001"
- "Swagger API documentation: http://localhost:3001/api"

**Important**: Keep this terminal window open! The backend must keep running for the application to work. If you close this window, the backend stops working.

#### Step 2: Start the Frontend Server

1. Open a **second** terminal/command prompt window
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

**What This Does**: This starts the frontend server, which serves the visual interface users interact with.

**You'll Know It's Working When**: 
- Your default web browser automatically opens to `http://localhost:3000`
- You see the Movie Review Platform homepage with movie cards
- If the browser doesn't open automatically, manually navigate to `http://localhost:3000` in your browser

**Important**: Keep this terminal window open too! The frontend must also keep running.

#### Step 3: Access the Application

- **Main Application**: Open your web browser and go to `http://localhost:3000`
- **API Documentation (Swagger)**: Open your web browser and go to `http://localhost:3001/api`

**What is localhost?** "localhost" means "this computer." When you see `localhost:3000`, it means the application is running on your own computer, not on the internet. The number (3000 or 3001) is called a "port" – think of it as a door number that tells your computer which application you want to access.

---

### Stopping the Application

When you're done using the application:

1. **Stop the Frontend**: In the frontend terminal window, press `Ctrl + C` (on Windows/Linux) or `Cmd + C` (on Mac). You'll be asked to confirm – type `Y` and press Enter.

2. **Stop the Backend**: In the backend terminal window, press `Ctrl + C` (on Windows/Linux) or `Cmd + C` (on Mac). You'll be asked to confirm – type `Y` and press Enter.

**Note**: Your data (movies, reviews, user accounts) is saved in the database file and will still be there the next time you start the application!

---

## Troubleshooting

This section helps you solve common problems you might encounter.

### Problem: "Loading movies..." Message Stuck on Screen

**What This Means**: The frontend is trying to load movies from the backend, but it's not getting a response.

#### Solution Steps:

**Step 1: Check if Backend is Running**
1. Look at your backend terminal window
2. You should see: "Application is running on: http://localhost:3001"
3. If you don't see this message, the backend isn't running

**If Backend Isn't Running:**
1. In the backend terminal, type: `npm run start:dev`
2. Wait for the "Application is running" message
3. Refresh your browser (press F5 or click the refresh button)

**Step 2: Verify Backend is Working**
1. Open your web browser
2. Go to: `http://localhost:3001/api`
3. You should see the Swagger API documentation page (a page with API endpoints listed)
4. If this page doesn't load, the backend has a problem

**Step 3: Check Frontend Connection**
1. Make sure the frontend is running (check the frontend terminal window)
2. Open browser Developer Tools:
   - Press `F12` on your keyboard, or
   - Right-click on the page and select "Inspect" or "Inspect Element"
3. Click on the "Console" tab
4. Look for error messages that mention:
   - "Failed to fetch"
   - "CORS"
   - "Network error"
   - "Connection refused"

**Common Causes:**
- Backend server isn't running
- Backend server crashed (check backend terminal for error messages)
- Port 3001 is being used by another program

---

### Problem: Port 3001 Already in Use

**What This Means**: Another program is already using port 3001, so the backend can't start.

#### Solutions:

**Solution 1: Stop the Other Program**
1. The backend terminal will show an error message
2. Look for what program is using the port
3. Close that program or stop it

**Solution 2: Change the Port**
1. Open the file: `backend/src/main.ts`
2. Find the line that says: `const port = process.env.PORT || 3001;`
3. Change `3001` to a different number (like `3002`)
4. Save the file
5. Restart the backend server

**Note**: If you change the backend port, you'll also need to update the frontend to use the new port (this is more advanced).

---

### Problem: Port 3000 Already in Use (Frontend)

**What This Means**: Another program is using port 3000 for the frontend.

#### Solutions:

**Solution 1: Use the Suggested Port**
- When you try to start the frontend, React will ask if you want to use a different port (like 3001)
- Type `Y` and press Enter
- The browser will open to the new port automatically

**Solution 2: Stop the Other Program**
- Close any other React applications or development servers running on port 3000

---

### Problem: CORS Errors

**What is CORS?** CORS (Cross-Origin Resource Sharing) is a security feature that controls how different websites can communicate with each other. When you see a CORS error, it means the browser is blocking communication between the frontend and backend.

**What This Looks Like**: Error messages in the browser console mentioning "CORS" or "Access-Control-Allow-Origin"

#### Solution:

1. Make sure the backend is running first (before starting the frontend)
2. Check that CORS is enabled in `backend/src/main.ts` (it should already be configured)
3. If problems persist, try:
   - Stopping both servers (Ctrl+C in both terminals)
   - Starting the backend first
   - Waiting 5 seconds
   - Starting the frontend second

---

### Problem: Database Not Seeding (No Movies Showing)

**What This Means**: The database should automatically load 13 Marvel movies on first startup, but they're not appearing.

#### Solution Steps:

1. **Check Backend Console**: Look at the backend terminal window
   - On first run, you should see: "✅ Seeded 13 movies successfully!"
   - If the database already has movies, you'll see: "✅ Database already contains X movies. Skipping seeding."

2. **If Movies Should Have Been Seeded But Weren't:**
   - Check the backend terminal for error messages
   - Common issues:
     - Database file permissions problem
     - Insufficient disk space
     - Database file is corrupted

3. **Reset Database (If Needed):**
   - Stop the backend server (Ctrl+C)
   - Delete the database file: `backend/movie_reviews.db`
   - Restart the backend server
   - The seeder will run again and create new movies

**How to Delete Database File (Windows PowerShell):**
```powershell
cd backend
Remove-Item movie_reviews.db -ErrorAction SilentlyContinue
```

**How to Delete Database File (Mac/Linux Terminal):**
```bash
cd backend
rm movie_reviews.db
```

---

### Problem: Images Not Showing

**What This Means**: Movie poster images are not displaying on the movie cards.

#### Solution:

1. **Check Image Files Exist**: Make sure image files are in the `frontend/public/images/` folder

2. **Check File Names**: Image file names must match exactly (including spaces and capitalization):
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

3. **File Format**: Images should be in JPG or JPEG format

4. **If Images Still Don't Show**: The application will still work without images – the image placeholders will just be hidden. This is normal and doesn't affect functionality.

---

### Problem: Backend Server Won't Start

#### Common Causes and Solutions:

**Missing Dependencies:**
- **Solution**: Run `npm install` in the backend folder again

**Node.js Version Too Old:**
- **Solution**: Update Node.js to version 16 or higher from nodejs.org

**Syntax Errors in Code:**
- **Solution**: Check the backend terminal for specific error messages and fix the mentioned files

**Port Already in Use:**
- **Solution**: See "Port 3001 Already in Use" section above

---

### Problem: Frontend Won't Start

#### Common Causes and Solutions:

**Missing Dependencies:**
- **Solution**: Run `npm install` in the frontend folder again

**Node.js Version Too Old:**
- **Solution**: Update Node.js to version 16 or higher

**Port Already in Use:**
- **Solution**: See "Port 3000 Already in Use" section above

---

### Problem: API Calls Fail (Reviews Don't Save, etc.)

**What This Means**: The frontend can't communicate with the backend to save or retrieve data.

#### Solution Steps:

1. **Verify Backend is Running**: Check the backend terminal for "Application is running" message

2. **Check Backend URL**: Make sure backend is running on `http://localhost:3001`

3. **Check Browser Console**: 
   - Press F12 to open Developer Tools
   - Go to the "Console" tab
   - Look for error messages
   - Common errors:
     - "Failed to fetch" = Backend isn't running or wrong URL
     - "404 Not Found" = Wrong endpoint URL
     - "CORS" = CORS configuration issue (see CORS section above)

4. **Test Backend Directly**: 
   - Open browser and go to: `http://localhost:3001/movies`
   - You should see a JSON list of movies
   - If this doesn't work, the backend has a problem

---

## Testing the API Directly

You can test if the backend is working properly by accessing it directly in your browser.

### Test 1: Get All Movies

1. Make sure the backend is running
2. Open your web browser
3. Go to: `http://localhost:3001/movies`
4. You should see a JSON (JavaScript Object Notation) list showing all movies

**What is JSON?** JSON is a format for storing and sending data. It looks like text with brackets and quotes. Don't worry if it looks complicated – the frontend automatically converts it to a nice visual format.

### Test 2: Access Swagger Documentation

1. Make sure the backend is running
2. Open your web browser
3. Go to: `http://localhost:3001/api`
4. You should see the Swagger UI page with a list of all API endpoints
5. You can click on any endpoint to expand it and see details
6. You can even test endpoints directly from this page by clicking "Try it out"

**What is Swagger?** Swagger is an interactive documentation tool that shows you all available API functions and lets you test them directly in your browser without needing special software.

---

## Understanding the Technology Stack

This section explains the technologies used in simple terms.

### Backend Technologies

**Node.js**: A program that allows JavaScript (traditionally a web browser language) to run on servers and computers. Think of it as a translator that lets JavaScript work outside of web browsers.

**NestJS**: A framework (a collection of pre-written code) that makes it easier to build backend applications. It provides structure and common features so developers don't have to write everything from scratch.

**TypeScript**: A version of JavaScript that adds extra features to help prevent errors. It's like JavaScript with safety checks built in.

**TypeORM**: A tool that helps manage the database. It translates between JavaScript code and database commands, making it easier to save and retrieve data.

**SQLite**: A simple database system that stores all data in a single file. Unlike more complex databases, you don't need a separate server program – it just works.

### Frontend Technologies

**React**: A JavaScript library (collection of code) that makes it easier to build interactive web pages. It allows developers to create reusable components (like building blocks) that update automatically when data changes.

**JavaScript**: The programming language that makes web pages interactive. It runs in your web browser and makes things happen when you click buttons or fill out forms.

**CSS**: Cascading Style Sheets – the language that controls how web pages look (colors, fonts, layouts, etc.). It's like the styling and design system for web pages.

### API Documentation

**Swagger/OpenAPI**: A standard format for documenting APIs. The Swagger UI provides an interactive webpage where you can see all available API functions and test them directly.

---

## Important Notes

### Data Persistence

- All data (movies, reviews, user accounts) is saved in the SQLite database file (`movie_reviews.db`)
- This file is located in the `backend` folder
- Your data persists between application restarts – it won't disappear when you close the application
- **Backup Tip**: If you want to backup your data, simply copy the `movie_reviews.db` file to another location

### Movie Seeding

- Movies are automatically loaded into the database on the **first run only** (when the database is empty)
- The system includes 13 pre-configured Marvel movies
- After the first run, movies are preserved even when you restart the backend
- If you want to reset and reload movies, delete the database file and restart the backend

### Rating Calculation

- Average ratings are calculated automatically whenever a review is added, updated, or deleted
- Ratings are displayed on a scale of 1-10 (though users rate 1-5 stars, which is doubled for display)
- The calculation happens instantly – you don't need to refresh the page

### User Accounts

- User accounts are stored in the database
- Users can sign up and log in to personalize their experience
- Currently, the system allows anyone to create reviews without logging in (this can be changed if needed)

---

## Getting Help

If you encounter problems not covered in this documentation:

1. **Check the Troubleshooting Section**: Many common issues are addressed above
2. **Check Terminal/Console Messages**: Error messages often provide clues about what's wrong
3. **Check Browser Console**: Press F12 and look at the Console tab for error messages
4. **Verify Prerequisites**: Make sure Node.js is installed and up to date
5. **Restart Servers**: Sometimes stopping and restarting both servers fixes temporary issues

---

## Conclusion

This Movie Review Platform provides a complete system for browsing movies, reading reviews, and sharing opinions. The application is designed to be user-friendly while providing powerful features for movie enthusiasts.

The combination of a robust backend API and an intuitive frontend interface creates a seamless experience for users to explore and discuss films. All data is securely stored and automatically managed, ensuring a smooth and reliable user experience.

We hope this documentation has been helpful in understanding and using the Movie Review Platform!

