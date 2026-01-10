# Movie Images Setup Guide

## Image Directory

Place movie poster images in: `frontend/public/images/`

## Required Image Files

The following image files are expected (matching the static movie list):

1. `the-godfather.jpg` - The Godfather (1972)
2. `the-shawshank-redemption.jpg` - The Shawshank Redemption (1994)
3. `the-dark-knight.jpg` - The Dark Knight (2008)
4. `pulp-fiction.jpg` - Pulp Fiction (1994)
5. `inception.jpg` - Inception (2010)
6. `the-matrix.jpg` - The Matrix (1999)
7. `titanic.jpg` - Titanic (1997)
8. `forrest-gump.jpg` - Forrest Gump (1994)
9. `avatar.jpg` - Avatar (2009)
10. `gladiator.jpg` - Gladiator (2000)
11. `schindlers-list.jpg` - Schindler's List (1993)
12. `the-lion-king.jpg` - The Lion King (1994)
13. `avengers-endgame.jpg` - Avengers: Endgame (2019)
14. `psycho.jpg` - Psycho (1960)
15. `star-wars-force-awakens.jpg` - Star Wars: The Force Awakens (2015)

## Where to Find Images

You can download movie posters from:
- IMDb (https://www.imdb.com)
- The Movie Database (TMDB) (https://www.themoviedb.org)
- Movie poster websites
- Official movie studio websites

## Image Recommendations

- **Format**: JPG or PNG
- **Aspect Ratio**: 2:3 (portrait) recommended for movie posters
- **Size**: 400x600px to 800x1200px works well
- **Quality**: Medium to high quality for web display

## How to Add Images

1. Download movie poster images from your preferred source
2. Rename them to match the exact filenames listed above
3. Place them in the `frontend/public/images/` directory
4. Restart the frontend development server if it's running
5. Refresh your browser to see the images

## Note

If an image file is missing, the UI will gracefully hide the image placeholder. The application will still function normally - only the image will not display.

