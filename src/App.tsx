import './App.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Movie } from './pages/Movie';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import { NotFound } from './pages/NotFound';
import { useEffect, useState } from 'react';
import { MoviesType } from './types/MoviesTypes';
import { Movies } from './context/MoviesContext';

export const App = () => {
  const [movies, setMovies] = useState<MoviesType>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchMovies = async () => {
      try {
        const response = await fetch('https://67d45c58d2c7857431ed6cd9.mockapi.io/movies');
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        if (isMounted) {
          setMovies(data);
        }
      } catch {
        if (isMounted) {
          throw new Error('Failed to fetch movies');
        }
      }
    };

    fetchMovies();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Movies.Provider value={movies}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Movies.Provider>

      <Footer />
    </BrowserRouter>
  );
};
