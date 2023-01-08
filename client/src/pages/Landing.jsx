import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* INFO */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            reprehenderit hic quaerat possimus asperiores nesciunt est quia
            soluta culpa qui.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
