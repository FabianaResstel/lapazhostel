function Contact({ t }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className="section-eyebrow">{t.contact.eyebrow}</p>

            <h2>{t.contact.title}</h2>

            <p className="contact-intro">{t.contact.intro}</p>

            <div className="contact-info">
              <p>
                <strong>{t.contact.emailLabel}</strong>
                <br />
                hello@lapazhostel.com
              </p>

              <p>
                <strong>{t.contact.phoneLabel}</strong>
                <br />
                +591 2 123 4567
              </p>

              <p>
                <strong>{t.contact.socialLabel}</strong>
                <br />

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>

                {" · "}

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-highlight">
              <h3>{t.contact.highlightTitle}</h3>

              <p>{t.contact.highlightText}</p>

              <a href="#contact-form" className="btn">
                {t.contact.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
