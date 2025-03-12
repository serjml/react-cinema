import video from '../../assets/videos/titanic.mp4';
import background from '../../assets/background.jpg';

export const Banner = () => {
  return (
    <div className="header__banner">
      <div>
        <p>REACT CINEMA</p>
        <p>
          Subheading that sets up context, shares more info about the website, or generally gets
          people psyched to keep scrolling.{' '}
        </p>
        <div>
          <a href="#movies">Movies</a>
          <button>Favorites</button>
        </div>
      </div>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <img src={background} alt="" />
    </div>
  );
};
