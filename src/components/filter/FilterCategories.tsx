import { useState } from 'react';

export const FilterCategories = () => {
  const [active, setActive] = useState('Popular');

  const FILTER_CATEGORIES = ['Popular', 'Novelty', 'Featured', 'Short films'];

  return (
    <div id="categoryes" className="filter__categoryes anchor">
      <div className="filter__categoryes-flex">
        {FILTER_CATEGORIES.map((category) => (
          <div
            onClick={() => setActive(category)}
            className={`filter__categoryes-item ${category === active ? 'active-category' : ''}`}
            key={category}
          >
            <p>{category}</p>
            <span></span>
          </div>
        ))}
      </div>
      <span></span>
    </div>
  );
};
