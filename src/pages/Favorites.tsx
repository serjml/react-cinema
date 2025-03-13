import { FavoriteBanner } from '../components/favorites/FavoriteBanner';
import { FavoritesList } from '../components/favorites/FavoritesList';
import { Filter } from '../components/filter/Filter';
import { MoviesList } from '../components/movies/MoviesList';
import { MoviesScroll } from '../components/movies/MoviesScroll';

export const Favorites = () => {
  return (
    <>
      <FavoriteBanner />
      <div className="container">
        <Filter />
        <div className="favorites_movies">
          <FavoritesList />
          <MoviesList />
        </div>
        <MoviesScroll />
      </div>
    </>
  );
};
