function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <h2>La Paz Hostel</h2>

            <p>A welcoming place to stay while you explore La Paz, Bolivia.</p>
          </div>

          <div className="col-sm-6 col-lg-3">
            <h3>Explore</h3>

            <ul>
              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#la-paz">La Paz</a>
              </li>

              <li>
                <a href="#explore">Things to Do</a>
              </li>

              <li>
                <a href="#eat">Where to Eat</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-4">
            <h3>Contact</h3>

            <ul>
              <li>
                <a href="mailto:hello@lapazhostel.com">hello@lapazhostel.com</a>
              </li>

              <li>
                <a href="tel:+59121234567">+591 2 123 4567</a>
              </li>

              <li>
                <a href="#contact-form">Send us a message</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 La Paz Hostel. All rights reserved.</p>
          <p>
            Coded by{" "}
            <a
              href="https://www.instagram.com/codetravelgive/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fabiana Resstel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
