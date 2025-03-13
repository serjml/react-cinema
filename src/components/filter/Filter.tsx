import { FilterButtons } from './FilterBattons';
import { FilterCategories } from './FilterCategories';
import { FilterSearch } from './FilterSearch';

export const Filter = () => {
  return (
    <div className="filter">
      <FilterCategories />
      <FilterButtons />
      <FilterSearch />
    </div>
  );
};
