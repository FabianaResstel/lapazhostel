import { useState } from "react";

function ContactForm({ t }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  }

  return (
    <section id="contact-form" className="contact-form-section">
      <div className="container">
        <div className="text-center">
          <p className="section-eyebrow">{t.contactForm.eyebrow}</p>

          <h2>{t.contactForm.title}</h2>

          <p className="section-intro">{t.contactForm.intro}</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  {t.contactForm.name}
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  {t.contactForm.email}
                </label>

                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  {t.contactForm.subject}
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  {t.contactForm.message}
                </label>

                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">
                {t.contactForm.button}
              </button>

              {submitted && (
                <p className="contact-form-success" role="status">
                  {t.contactForm.success}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
