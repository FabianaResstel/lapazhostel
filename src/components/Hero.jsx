import heroImage from "../images/hero.jpg";

function Hero({ t }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className="hero-eyebrow">{t.hero.eyebrow}</p>

            <h1>{t.hero.title}</h1>

            <p className="hero-text">{t.hero.text}</p>

            <a href="#la-paz" className="btn btn-primary">
              {t.hero.button}
            </a>
          </div>

          <div className="col-lg-6">
            <img
              src={heroImage}
              alt="Mountain landscape"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
