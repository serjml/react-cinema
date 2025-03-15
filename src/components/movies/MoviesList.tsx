import { useContext } from 'react';
import { Movies } from '../../context/MoviesContext';
import { MoviesCard } from './MoviesCard';

export const MoviesList = () => {
  const movies = useContext(Movies);
  console.log(movies);

  return (
    <div id="movies" className="movies anchor">
      {movies.map((movie) => (
        <MoviesCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};
