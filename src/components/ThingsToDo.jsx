import valleyImage from "../images/valley-of-the-moon.webp";
import telefericoImage from "../images/teleferico.jpg";
import witchesMarketImage from "../images/witches-market.jpg";
import elAltoImage from "../images/el-alto.jpg";

function ThingsToDo({ t }) {
  return (
    <section id="explore" className="things-to-do-section">
      <div className="container">
        <div>
          <p className="section-eyebrow">{t.thingsToDo.eyebrow}</p>

          <h2>{t.thingsToDo.title}</h2>

          <p className="section-intro">{t.thingsToDo.intro}</p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <div className="activity-card">
              <div className="activity-image">
                <img
                  src={valleyImage}
                  alt="Valle de la Luna in La Paz, Bolivia"
                />
              </div>

              <h3>{t.thingsToDo.activities.valley.title}</h3>

              <p>{t.thingsToDo.activities.valley.text}</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Valle+de+la+Luna+La+Paz+Bolivia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                {t.thingsToDo.activities.valley.button}
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="activity-card">
              <div className="activity-image">
                <img
                  src={telefericoImage}
                  alt="Mi Teleférico in La Paz, Bolivia"
                />
              </div>

              <h3>{t.thingsToDo.activities.cableCar.title}</h3>

              <p>{t.thingsToDo.activities.cableCar.text}</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Mi+Teleferico+La+Paz+Bolivia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                {t.thingsToDo.activities.cableCar.button}
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="activity-card">
              <div className="activity-image">
                <img
                  src={witchesMarketImage}
                  alt="Witches Market in La Paz, Bolivia"
                />
              </div>

              <h3>{t.thingsToDo.activities.witchesMarket.title}</h3>

              <p>{t.thingsToDo.activities.witchesMarket.text}</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Witches+Market+La+Paz+Bolivia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                {t.thingsToDo.activities.witchesMarket.button}
              </a>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="activity-card">
              <div className="activity-image">
                <img src={elAltoImage} alt="El Alto in La Paz, Bolivia" />
              </div>

              <h3>{t.thingsToDo.activities.elAlto.title}</h3>

              <p>{t.thingsToDo.activities.elAlto.text}</p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=El+Alto+Bolivia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                {t.thingsToDo.activities.elAlto.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThingsToDo;
