# Prompt for AI Documentation Generation

```
You are a technical documentation specialist. Your task is to format the content from PROJECT_DOCUMENTATION.md into a professional documentation format.

FORMATTING REQUIREMENTS:

1. STRUCTURE: Each major section should follow this exact format:

   [Section Title]:
   
   [Image Placeholder - use exactly this format: [Image: Description of what should be shown in the image]]
   
   [Paragraph(s) of explanatory text]

2. SECTION ORGANIZATION: Organize the content into the following sections in this exact order:

   - Home Page Interface
   - Sign-Up Functionality
   - Login Functionality
   - Browsing Movies
   - Viewing Movie Details
   - Adding a Review
   - Searching and Filtering Movies

3. IMAGE PLACEHOLDER FORMAT: Use this exact format for image placeholders:
   [Image: Brief description of what should be shown]
   
   Examples:
   - [Image: Homepage showing movie cards in a grid layout]
   - [Image: Sign-up form modal with username, email, password fields]
   - [Image: Login form modal with username and password fields]
   - [Image: Movie detail modal showing full movie information and reviews]
   - [Image: Review form with rating stars and comment field]

4. PARAGRAPH REQUIREMENTS:
   - Write 1-3 paragraphs per section (aim for 2 paragraphs for most sections)
   - Use professional, clear language
   - Explain the functionality in a way that non-technical users can understand
   - Keep paragraphs concise but informative (3-5 sentences each)
   - Maintain the explanatory tone from the original documentation
   - Remove any technical jargon or explain it in simple terms

5. STYLING GUIDELINES:
   - Use clear, descriptive section titles (as shown above)
   - Ensure consistent formatting throughout
   - Use proper capitalization (Title Case for section headers)
   - Maintain professional tone
   - Each section should be clearly separated (blank line between sections)

6. CONTENT EXTRACTION:
   - Extract relevant content from the "Steps in Showing Functionality" section
   - Include key details about what each feature does and how users interact with it
   - Focus on user-facing functionality and user experience
   - Include information about form fields, buttons, and user interactions
   - Mention validation rules and user feedback (alerts, messages) where relevant

7. DO NOT INCLUDE:
   - Technical implementation details
   - API endpoint information
   - Troubleshooting sections
   - Setup/installation instructions
   - Code snippets
   - Technical terminology without explanation
   - The "Key Terms Explained" section (unless specifically needed in context)

8. OUTPUT FORMAT:
   - Plain text format
   - No markdown formatting (no **, no #, no lists with bullets)
   - Use plain text section headers followed by colon
   - Use line breaks to separate sections
   - Each section should start with the section title, then image placeholder, then paragraph(s)

EXAMPLE OF DESIRED OUTPUT FORMAT:

Home Page Interface:

[Image: Homepage displaying movie cards in a grid layout with movie posters, titles, ratings, and review counts]

Upon opening the Movie Review Platform, users are greeted with a modern and visually appealing homepage that displays the movie catalog. At the top of the page, the "BLOCK BUSTER" logo serves as the platform's identity, accompanied by navigation buttons for logging in or signing up.

The main page displays movie cards in an attractive grid layout, each showing the movie poster image, title, director name, release year, average rating displayed as stars out of 10, number of reviews, and an "Add Review" button. Users can click anywhere on a movie card to view detailed information about that movie, creating an intuitive browsing experience.

---

Sign-Up Functionality:

[Image: Sign-up form modal displaying input fields for username, email, password, and re-type password with validation messages]

This feature allows new users to create an account and join the Movie Review Platform community. The sign-up form appears in a clean, centered pop-up window (modal) that overlays the main page, providing a focused registration experience without navigating away from the homepage.

The form includes four input fields: username (which must be at least 3 characters and unique), email address (requiring valid email format), password (minimum 6 characters for security), and a re-type password field to confirm the password was entered correctly. The form includes validation to ensure all information meets requirements, and if a username already exists, the system notifies the user to choose a different one. Once all fields are completed correctly, clicking the "SIGN UP" button creates the account and automatically logs the user into the platform.

---

[Continue with remaining sections following the same format...]

---

INSTRUCTIONS:
1. Read the entire PROJECT_DOCUMENTATION.md file
2. Extract content from the "Steps in Showing Functionality" section
3. Format each subsection according to the requirements above
4. Create appropriate image placeholders for each section
5. Write clear, professional paragraphs explaining each feature
6. Ensure consistency in formatting and tone throughout
7. Output the formatted documentation following the exact structure specified
```

