export interface MovieProps {
  title: string;
  description: string;
  trailerUrl: string;
  imageUrl: string;
  categories: (number | string)[];
  category: string[];
  aboutInfo: (number | string)[];
  id: '1';
}

export type MoviesType = MovieProps[];
