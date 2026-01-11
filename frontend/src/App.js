import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import ReviewForm from './components/ReviewForm';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import MovieDetailModal from './components/MovieDetailModal';
import { getMovies } from './services/movieService';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredTVShows, setFilteredTVShows] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [wasDetailOpen, setWasDetailOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('MOVIE'); // 'MOVIE' or 'TV SHOW'
  const [currentUser, setCurrentUser] = useState(null);
  const [activeFilter, setActiveFilter] = useState('POPULAR');
  const [activeTVFilter, setActiveTVFilter] = useState('POPULAR');

  useEffect(() => {
    fetchMovies();
    // Check for existing user session
    const storedUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    // Separate movies and TV shows
    const moviesOnly = movies.filter(item => !item.type || item.type === 'movie');
    const tvShowsOnly = movies.filter(item => item.type === 'tvshow');

    // Filter and sort movies
    let filtered = [...moviesOnly];
    if (searchQuery.trim() !== '') {
      if (searchType === 'MOVIE') {
        // Only search in movies
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
          (movie) =>
            movie.title.toLowerCase().includes(query) ||
            movie.director.toLowerCase().includes(query) ||
            (movie.description && movie.description.toLowerCase().includes(query))
        );
      } else {
        // If searching for TV SHOW, hide movies
        filtered = [];
      }
    }

    // Apply category filter for movies
    switch (activeFilter) {
      case 'POPULAR':
        filtered.sort((a, b) => {
          const reviewsA = a.reviews?.length || 0;
          const reviewsB = b.reviews?.length || 0;
          return reviewsB - reviewsA;
        });
        break;
      
      case 'COMING SOON':
        filtered.sort((a, b) => {
          const currentYear = new Date().getFullYear();
          const yearA = a.releaseYear || 0;
          const yearB = b.releaseYear || 0;
          if (yearA > currentYear && yearB <= currentYear) return -1;
          if (yearA <= currentYear && yearB > currentYear) return 1;
          return yearB - yearA;
        });
        break;
      
      case 'TOP RATED':
        filtered.sort((a, b) => {
          const ratingA = parseFloat(a.averageRating) || 0;
          const ratingB = parseFloat(b.averageRating) || 0;
          return ratingB - ratingA;
        });
        break;
      
      case 'MOST REVIEWED':
        filtered.sort((a, b) => {
          const reviewsA = a.reviews?.length || 0;
          const reviewsB = b.reviews?.length || 0;
          if (reviewsB !== reviewsA) {
            return reviewsB - reviewsA;
          }
          const ratingA = parseFloat(a.averageRating) || 0;
          const ratingB = parseFloat(b.averageRating) || 0;
          return ratingB - ratingA;
        });
        break;
    }

    setFilteredMovies(filtered);

    // Filter and sort TV shows
    let filteredTV = [...tvShowsOnly];
    if (searchQuery.trim() !== '') {
      if (searchType === 'TV SHOW') {
        // Only search in TV shows
        const query = searchQuery.toLowerCase();
        filteredTV = filteredTV.filter(
          (show) =>
            show.title.toLowerCase().includes(query) ||
            show.director.toLowerCase().includes(query) ||
            (show.description && show.description.toLowerCase().includes(query))
        );
      } else {
        // If searching for MOVIE, hide TV shows
        filteredTV = [];
      }
    }

    // Apply category filter for TV shows
    switch (activeTVFilter) {
      case 'POPULAR':
        filteredTV.sort((a, b) => {
          const reviewsA = a.reviews?.length || 0;
          const reviewsB = b.reviews?.length || 0;
          return reviewsB - reviewsA;
        });
        break;
      
      case 'COMING SOON':
        filteredTV.sort((a, b) => {
          const currentYear = new Date().getFullYear();
          const yearA = a.releaseYear || 0;
          const yearB = b.releaseYear || 0;
          if (yearA > currentYear && yearB <= currentYear) return -1;
          if (yearA <= currentYear && yearB > currentYear) return 1;
          return yearB - yearA;
        });
        break;
      
      case 'TOP RATED':
        filteredTV.sort((a, b) => {
          const ratingA = parseFloat(a.averageRating) || 0;
          const ratingB = parseFloat(b.averageRating) || 0;
          return ratingB - ratingA;
        });
        break;
      
      case 'MOST REVIEWED':
        filteredTV.sort((a, b) => {
          const reviewsA = a.reviews?.length || 0;
          const reviewsB = b.reviews?.length || 0;
          if (reviewsB !== reviewsA) {
            return reviewsB - reviewsA;
          }
          const ratingA = parseFloat(a.averageRating) || 0;
          const ratingB = parseFloat(b.averageRating) || 0;
          return ratingB - ratingA;
        });
        break;
    }

    setFilteredTVShows(filteredTV);
  }, [searchQuery, searchType, movies, activeFilter, activeTVFilter]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getMovies();
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Failed to fetch movies. Make sure the backend server is running on http://localhost:3001');
      setLoading(false);
    }
  };

  const handleReviewAdded = async () => {
    await fetchMovies();
    setShowReviewForm(false);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setShowMovieDetail(true);
  };

  const handleCloseMovieDetail = () => {
    setShowMovieDetail(false);
    setSelectedMovie(null);
    setWasDetailOpen(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search is handled by handleSearch onChange
  };

  const handleLogin = (user) => {
    setCurrentUser(user);
    alert(`Welcome back, ${user.username}!`);
  };

  const handleSignup = (user) => {
    setCurrentUser(user);
    alert(`Account created successfully! Welcome, ${user.username}!`);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    setCurrentUser(null);
    alert('Logged out successfully!');
  };

  const openLogin = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const openSignup = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  return (
    <div className="App">
      {/* Header Navigation */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo-section">
            <img src="/images/blockbuster logo.png" alt="Block Buster" className="logo" onError={(e) => { e.target.style.display = 'none'; }} />
            <div className="logo-text">
              <span className="logo-title">BLOCK BUSTER</span>
              <span className="logo-subtitle">Film Review</span>
            </div>
          </div>
          <nav className="main-nav">
            <div className="nav-right">
              {currentUser ? (
                <>
                  <span className="nav-link" style={{ color: '#dc1a28' }}>Welcome, {currentUser.username}!</span>
                  <button className="btn-signup btn-logout" onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt" style={{ marginRight: '0.5rem' }}></i>
                    LOG OUT
                  </button>
                </>
              ) : (
                <>
                  <a href="#login" className="nav-link" onClick={(e) => { e.preventDefault(); openLogin(); }}>LOG IN</a>
                  <button className="btn-signup" onClick={openSignup}>SIGN UP</button>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Search Bar Section */}
      <div className="search-section">
        <div className="search-container">
          <div className="search-dropdown">
            <select 
              className="dropdown-select" 
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="MOVIE">MOVIE</option>
              <option value="TV SHOW">TV SHOW</option>
            </select>
          </div>
          <form className="search-input-wrapper" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              className="search-input"
              placeholder="Search for a movie, TV Show or celebrity that you are looking for"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button type="submit" className="search-button">
              <i className="fas fa-search search-icon"></i>
            </button>
          </form>
          <div className="social-follow">
            <span className="follow-text">FOLLOW US:</span>
            <div className="social-icons">
              <a href="#" className="social-icon" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon" title="Google Plus">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social-icon" title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background */}
      <div className="hero-section">
        <div className="hero-background">
          <img src="/images/slider-bg.jpg" alt="Background" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h2 className="now-playing-text">MOVIE REVIEWS</h2>
        </div>
      </div>

      {/* Main Content */}
      <main className="App-main">
        {/* Login Modal */}
        {showLoginModal && (
          <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <LoginModal
                onClose={() => setShowLoginModal(false)}
                onSwitchToSignup={openSignup}
                onLogin={handleLogin}
              />
            </div>
          </div>
        )}

        {/* Signup Modal */}
        {showSignupModal && (
          <div className="modal-overlay" onClick={() => setShowSignupModal(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <SignupModal
                onClose={() => setShowSignupModal(false)}
                onSwitchToLogin={openLogin}
                onSignup={handleSignup}
              />
            </div>
          </div>
        )}

        {/* Movie Detail Modal */}
        {showMovieDetail && selectedMovie && (
          <MovieDetailModal
            movie={selectedMovie}
            onClose={handleCloseMovieDetail}
            onAddReview={(movie) => {
              if (!currentUser) {
                alert('Please log in to add a review!');
                handleCloseMovieDetail();
                openLogin();
                return;
              }
              // Track that detail modal was open
              setWasDetailOpen(true);
              setSelectedMovie(movie);
              setShowMovieDetail(false);
              setShowReviewForm(true);
            }}
          />
        )}

        {/* Review Form Modal */}
        {showReviewForm && selectedMovie && (
          <div className="modal-overlay" onClick={() => {
            setShowReviewForm(false);
            // If detail modal was open, keep selectedMovie; otherwise clear it
          }}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <ReviewForm
                movieId={selectedMovie.id}
                movieTitle={selectedMovie.title}
                currentUser={currentUser}
                onSubmit={async () => {
                  setShowReviewForm(false);
                  // Refresh all movies
                  await fetchMovies();
                  // Get updated movie data with fresh reviews
                  const data = await getMovies();
                  const updatedMovie = data.find(m => m.id === selectedMovie.id);
                  if (updatedMovie) {
                    setSelectedMovie(updatedMovie);
                    // If detail modal was open before, reopen it with fresh data
                    if (wasDetailOpen) {
                      setShowMovieDetail(true);
                      setWasDetailOpen(false);
                    }
                  } else {
                    setWasDetailOpen(false);
                  }
                }}
                onCancel={() => {
                  setShowReviewForm(false);
                  // If detail modal was open, reopen it
                  if (wasDetailOpen) {
                    setShowMovieDetail(true);
                    setWasDetailOpen(false);
                  } else {
                    setSelectedMovie(null);
                  }
                }}
              />
            </div>
          </div>
        )}

        {error && (
          <div className="error-message">
            <h3>⚠️ Error Loading Movies</h3>
            <p>{error}</p>
            <button className="btn btn-primary" onClick={fetchMovies}>
              <i className="fas fa-redo" style={{ marginRight: '0.5rem' }}></i>
              Retry
            </button>
          </div>
        )}
        
        {loading && !error && (
          <div className="no-movies">
            <h2>Loading movies...</h2>
            <p>Please wait while we load the movie catalog.</p>
          </div>
        )}

        {!loading && !error && (
          <>
          <div className="movies-section">
            <div className="section-header">
              <h2 className="section-title">MOVIES</h2>
              <div className="section-filters">
                <button
                  type="button"
                  className={`filter-tag ${activeFilter === 'POPULAR' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveFilter('POPULAR');
                  }}
                >
                  #POPULAR
                </button>
                <button
                  type="button"
                  className={`filter-tag ${activeFilter === 'COMING SOON' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveFilter('COMING SOON');
                  }}
                >
                  #COMING SOON
                </button>
                <button
                  type="button"
                  className={`filter-tag ${activeFilter === 'TOP RATED' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveFilter('TOP RATED');
                  }}
                >
                  #TOP RATED
                </button>
                <button
                  type="button"
                  className={`filter-tag ${activeFilter === 'MOST REVIEWED' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveFilter('MOST REVIEWED');
                  }}
                >
                  #MOST REVIEWED
                </button>
              </div>
            </div>
            {(searchQuery || activeFilter !== 'POPULAR') && (
              <div style={{ 
                marginBottom: '1.5rem', 
                padding: '0.75rem 1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#cccccc', 
                fontSize: '0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <i className="fas fa-filter" style={{ color: '#dc1a28' }}></i>
                <span>
                  {searchQuery ? (
                    <>Found <strong>{filteredMovies.length}</strong> result{filteredMovies.length !== 1 ? 's' : ''} for "<strong>{searchQuery}</strong>"</>
                  ) : (
                    <>Showing <strong>{filteredMovies.length}</strong> movie{filteredMovies.length !== 1 ? 's' : ''} filtered by <strong>#{activeFilter}</strong></>
                  )}
                </span>
                {(searchQuery || activeFilter !== 'POPULAR') && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveFilter('POPULAR');
                    }}
                    style={{
                      marginLeft: 'auto',
                      background: 'transparent',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#aaaaaa',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#dc1a28';
                      e.target.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.color = '#aaaaaa';
                    }}
                  >
                    <i className="fas fa-times" style={{ marginRight: '0.25rem' }}></i>
                    Clear Filters
                  </button>
                )}
              </div>
            )}
            {filteredMovies.length === 0 && searchQuery ? (
              <div className="no-movies">
                <h2>No movies found</h2>
                <p>Try a different search term or clear filters.</p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    setSearchQuery('');
                    setActiveFilter('POPULAR');
                  }}
                  style={{ marginTop: '1rem' }}
                >
                  <i className="fas fa-times" style={{ marginRight: '0.5rem' }}></i>
                  Clear Filters
                </button>
              </div>
            ) : (
              <MovieList
                movies={filteredMovies}
                onMovieClick={handleMovieClick}
                onAddReview={(movie) => {
                  if (!currentUser) {
                    alert('Please log in to add a review!');
                    openLogin();
                    return;
                  }
                  setSelectedMovie(movie);
                  setShowReviewForm(true);
                }}
              />
            )}
          </div>

          {/* TV Shows Section */}
          <div className="movies-section" style={{ marginTop: '4rem' }}>
            <div className="section-header">
              <h2 className="section-title">TV SHOWS</h2>
              <div className="section-filters">
                <button
                  type="button"
                  className={`filter-tag ${activeTVFilter === 'POPULAR' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveTVFilter('POPULAR');
                  }}
                >
                  #POPULAR
                </button>
                <button
                  type="button"
                  className={`filter-tag ${activeTVFilter === 'COMING SOON' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveTVFilter('COMING SOON');
                  }}
                >
                  #COMING SOON
                </button>
                <button
                  type="button"
                  className={`filter-tag ${activeTVFilter === 'TOP RATED' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveTVFilter('TOP RATED');
                  }}
                >
                  #TOP RATED
                </button>
                <button
                  type="button"
                  className={`filter-tag ${activeTVFilter === 'MOST REVIEWED' ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveTVFilter('MOST REVIEWED');
                  }}
                >
                  #MOST REVIEWED
                </button>
              </div>
            </div>
            {filteredTVShows.length === 0 ? (
              <div className="no-movies">
                <h2>No TV shows found</h2>
                <p>{searchQuery ? 'Try a different search term or clear filters.' : 'No TV shows available at the moment.'}</p>
              </div>
            ) : (
              <MovieList
                movies={filteredTVShows}
                onMovieClick={handleMovieClick}
                onAddReview={(movie) => {
                  if (!currentUser) {
                    alert('Please log in to add a review!');
                    openLogin();
                    return;
                  }
                  setSelectedMovie(movie);
                  setShowReviewForm(true);
                }}
              />
            )}
          </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

