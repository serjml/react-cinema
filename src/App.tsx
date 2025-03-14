import './App.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Movie } from './pages/Movie';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import { NotFound } from './pages/NotFound';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
