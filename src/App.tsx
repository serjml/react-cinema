import './App.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
// import { Movie } from './pages/Movie';
import { Home } from './pages/Home';
// import { Favorites } from './pages/Favorites';

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <Favorites /> */}
      {/* <Movie /> */}
      <Footer />
    </>
  );
};
