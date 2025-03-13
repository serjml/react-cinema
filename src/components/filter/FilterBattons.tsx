import { useState } from 'react';

export const FilterButtons = () => {
  const GENRES = [
    'Movies',
    'Cinema',
    'Adventure',
    'Comedy',
    'Fantasy',
    'History',
    'Cartoon',
    'Detective',
    'Mysticism',
    'Drama',
  ];

  const [active, setActive] = useState('Movies');

  return (
    <div className="filter__buttons">
      {GENRES.map((genre) => (
        <button
          onClick={() => setActive(genre)}
          className={genre === active ? 'active' : ''}
          key={genre}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};
