import logo from './assets/icons/pngwing.com.png';
import heart from './assets/icons/icons8-червы-100.png';
import star from './assets/icons/star.png';
import facebook from './assets/icons/icons8-facebook-новый-144.png';
import insta from './assets/icons/icons8-instagram-144.png';
import youtube from './assets/icons/icons8-youtube-144.png';
import linkedin from './assets/icons/icons8-линкедин-144.png';
import video from './assets/videos/titanic.mp4';

export function Movies() {
  return (
    <>
      <header>
        <a className="header__logo-flex" href="./index.html">
          <img src={logo} alt="logo" />
          <div className="header__logo-flex_sitename">
            <p>REACT</p>
            <p>CINEMA</p>
          </div>
        </a>
        <ul className="header__navbar-flex">
          <a href="./index.html">Home</a>
          <a href="./favorites.html">Favorites</a>
          <a href="">Movies</a>
          <a href="">Cartoon</a>
          <a href="">Fantasy</a>
        </ul>
        <div className="header__auth-flex">
          <div className="favorites__movies">
            <img src={heart} alt="" />
            <p>0</p>
          </div>
          <a>Account</a>
        </div>
      </header>
      <main>
        <div className="video-wrapper">
          <video controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className="main__info">
          <div className="main__info-left">
            <div className="main__info-left-title">
              <p>Бегущий по лезвию 2049</p>
              <div className="main__info-rating">
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
            </div>
            <div className="main__info-left-categoryes">
              <p>18+</p>
              <p>HD</p>
              <p>2022</p>
              <p>Movie</p>
            </div>
            <div className="main__info-left-about">
              <p>Description</p>
              <p>
                Two years have passed unnoticed in Naruto's world. Former newcomers joined the ranks
                of experienced Shinobi in the ranks of tuning and zenin. The main characters did not
                sit still – everyone became a disciple of one of the legendary Sannin – the three
                great ninja Konoha.
              </p>
            </div>
          </div>
          <div className="main__info-right">
            <p>About</p>
            <div className="main__info-rigth-info">
              <div>
                <p>Type:</p>
                <p>Movie</p>
              </div>
              <div>
                <p>Director:</p>
                <p>Movie</p>
              </div>
              <div>
                <p>Date aired:</p>
                <p>Movie</p>
              </div>
              <div>
                <p>Duration:</p>
                <p>Movie</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer__padding">
          <div className="site__info">
            <p>REACT CINEMA</p>
            <div>
              <img src={facebook} alt="" />
              <img src={insta} alt="" />
              <img src={youtube} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
          <div className="footer__hrefs">
            <div>
              <p>Main</p>
              <p>Topic</p>
              <p>Topic</p>
              <p>Topic</p>
            </div>
            <div>
              <p>FAQ</p>
              <p>Topic</p>
              <p>Topic</p>
              <p>Topic</p>
            </div>
            <div>
              <p>Reports</p>
              <p>Topic</p>
              <p>Topic</p>
              <p>Topic</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
