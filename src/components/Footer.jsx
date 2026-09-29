import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
                <a href="mailto:hello@lapazhostel.com">
                  <span>hello@lapazhostel.com</span>
                </a>
              </li>

              <li>
                <a href="tel:+59121234567">
                  <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
                  <span>+591 2 123 4567</span>
                </a>
              </li>

              <li>
                <a href="#contact-form">
                  <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                  <span>Send us a message</span>
                </a>
              </li>
              <li className="footer-social">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
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
