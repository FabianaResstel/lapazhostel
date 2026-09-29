import { Link, useParams } from "react-router-dom";

function Navbar({ t }) {
  const { lang } = useParams();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to={`/${lang}`}>
          La Paz Hostel
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                {t.navbar.about}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#la-paz">
                {t.navbar.laPaz}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#explore">
                {t.navbar.explore}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#eat">
                {t.navbar.eat}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                {t.navbar.contact}
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                🌐
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/en">
                    English
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/es">
                    Español
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pt">
                    Português
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
