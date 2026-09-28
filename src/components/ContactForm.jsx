function ContactForm() {
  return (
    <section id="contact-form" className="contact-form-section">
      <div className="container">
        <div className="text-center">
          <p className="section-eyebrow">SEND US A MESSAGE</p>

          <h2>How can we help?</h2>

          <p className="section-intro">
            Have a question or need more information? Send us a message and
            we'll get back to you.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
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
                  Email
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
                  Subject
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
                  Message
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
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
