function About({ t }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className="section-eyebrow">{t.about.eyebrow}</p>

            <h2>{t.about.title}</h2>

            <p>{t.about.paragraph1}</p>

            <p>{t.about.paragraph2}</p>
          </div>

          <div className="col-lg-6">
            <div className="about-highlight">
              <h3>{t.about.highlightTitle}</h3>

              <p>{t.about.highlightText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
