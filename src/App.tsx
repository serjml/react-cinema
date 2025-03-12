import './App.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
// import { Home } from './pages/Home';
import { MoviesList } from './components/movies/MoviesList';
import { Banner } from './components/home/Banner';
import { Filter } from './components/home/Filter';

export const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="container">
        <Filter />
        <MoviesList />
        <div className="container">
          <div className="movies__scroll">
            <button>
              <i className="fa-solid fa-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
