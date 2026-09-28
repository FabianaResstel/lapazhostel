function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className="section-eyebrow">GET IN TOUCH</p>

            <h2>We'd love to hear from you.</h2>

            <p className="contact-intro">
              Have a question about your stay, La Paz, or what to do in the
              city? Get in touch with our team.
            </p>

            <div className="contact-info">
              <p>
                <strong>Email</strong>
                <br />
                hello@lapazhostel.com
              </p>

              <p>
                <strong>Phone</strong>
                <br />
                +591 2 123 4567
              </p>

              <p>
                <strong>Follow us</strong>
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
              <h3>Planning your stay?</h3>

              <p>
                Send us a message and we'll be happy to help with questions
                about the hostel, the city, or your visit.
              </p>

              <a href="#contact-form" className="btn">
                Send us a message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
