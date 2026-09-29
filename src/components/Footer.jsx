import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <h2>La Paz Hostel</h2>
            <p>{t.footer.description}</p>
          </div>

          <div className="col-sm-6 col-lg-3">
            <h3>{t.footer.exploreTitle}</h3>

            <ul>
              <li>
                <a href="#about">{t.footer.about}</a>
              </li>

              <li>
                <a href="#la-paz">{t.footer.laPaz}</a>
              </li>

              <li>
                <a href="#explore">{t.footer.thingsToDo}</a>
              </li>

              <li>
                <a href="#eat">{t.footer.whereToEat}</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-4">
            <h3>{t.footer.contactTitle}</h3>

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
                  <span>{t.footer.sendMessage}</span>
                </a>
              </li>

              <li className="footer-social">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 La Paz Hostel. {t.footer.rights}</p>

          <p>
            {t.footer.codedBy}{" "}
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
