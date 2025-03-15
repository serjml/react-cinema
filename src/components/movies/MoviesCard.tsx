import { Link } from 'react-router-dom';
import star from '../../assets/icons/star.png';
import { MovieProps } from '../../types/MoviesTypes';

export const MoviesCard: React.FC<MovieProps> = (props) => {
  return (
    <Link className="movies__card" to="/movie">
      <div className="movies__card-rating">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <img src={props.imageUrl} alt="" />
    </Link>
  );
};
