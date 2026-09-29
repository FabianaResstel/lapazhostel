function WhyStay({ t }) {
  return (
    <section id="why-stay" className="why-stay-section">
      <div className="container">
        <div>
          <p className="section-eyebrow">{t.whyStay.eyebrow}</p>

          <h2>{t.whyStay.title}</h2>

          <p className="section-intro">{t.whyStay.intro}</p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h3>{t.whyStay.comfortable.title}</h3>
              <p>{t.whyStay.comfortable.text}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h3>{t.whyStay.clean.title}</h3>
              <p>{t.whyStay.clean.text}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h3>{t.whyStay.friendly.title}</h3>
              <p>{t.whyStay.friendly.text}</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="feature-card">
              <h3>{t.whyStay.local.title}</h3>
              <p>{t.whyStay.local.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyStay;
