import { Banner } from '../components/home/Banner';
import { Filter } from '../components/filter/Filter';
import { MoviesList } from '../components/movies/MoviesList';
import { MoviesScroll } from '../components/movies/MoviesScroll';

export const Home = () => {
  return (
    <>
      <div className="container">
        <Banner />
        <Filter />
        <MoviesList />
        <MoviesScroll />
      </div>
    </>
  );
};
