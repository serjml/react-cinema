import { createContext } from 'react';
import { MoviesType } from '../types/MoviesTypes';

export const Movies = createContext<MoviesType>([]);
