import star from '../../assets/icons/star.png';
import filmImage from '../../assets/ImageFılm.jpg';

export const MoviesCard = () => {
  return (
    <a className="movies__card" href="./movie.html">
      <div className="movies__card-rating">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <img src={filmImage} alt="" />
    </a>
  );
};
