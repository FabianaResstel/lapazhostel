function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className="hero-eyebrow">WELCOME TO LA PAZ HOSTEL</p>

            <h1>Your home in La Paz.</h1>

            <p className="hero-text">
              Stay somewhere friendly, clean, and local while you explore one of
              Bolivia's most fascinating cities.
            </p>

            <a href="#la-paz" className="btn btn-primary">
              Explore La Paz
            </a>
          </div>

          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80"
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
