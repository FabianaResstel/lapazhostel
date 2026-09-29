function LaPaz({ t }) {
  return (
    <section id="la-paz" className="la-paz-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className="section-eyebrow">{t.laPaz.eyebrow}</p>

            <h2>{t.laPaz.title}</h2>

            <p>{t.laPaz.paragraph1}</p>

            <p>{t.laPaz.paragraph2}</p>
          </div>

          <div className="col-lg-6">
            <div className="la-paz-highlight">
              <h3>{t.laPaz.highlightTitle}</h3>

              <p>{t.laPaz.highlightText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LaPaz;
