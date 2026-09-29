function ThingsToDo() {
  return (
    <section id="explore" className="things-to-do-section">
      {" "}
      <div className="container">
        {" "}
        <div>
          {" "}
          <p className="section-eyebrow">THINGS TO DO</p>{" "}
          <h2>Make the most of your time in La Paz.</h2>{" "}
          <p className="section-intro">
            {" "}
            Explore dramatic landscapes, discover local culture, and experience
            some of the places that make La Paz unique.{" "}
          </p>{" "}
        </div>{" "}
        <div className="row g-4">
          {" "}
          <div className="col-md-6 col-lg-3">
            {" "}
            <div className="activity-card">
              {" "}
              <div className="activity-image"> Image placeholder </div>{" "}
              <h3>Valle de la Luna</h3>{" "}
              <p>
                {" "}
                Discover unusual rock formations and landscapes just outside the
                city.{" "}
              </p>{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Valle+de+la+Luna+La+Paz+Bolivia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                {" "}
                Get directions{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-6 col-lg-3">
            {" "}
            <div className="activity-card">
              {" "}
              <div className="activity-image"> Image placeholder </div>{" "}
              <h3>Mi Teleférico</h3>{" "}
              <p>
                {" "}
                See La Paz from above while traveling across the city by cable
                car.{" "}
              </p>{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Mi+Teleferico+La+Paz+Bolivia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                {" "}
                Get directions{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-6 col-lg-3">
            {" "}
            <div className="activity-card">
              {" "}
              <div className="activity-image"> Image placeholder </div>{" "}
              <h3>Witches' Market</h3>{" "}
              <p>
                {" "}
                Explore one of La Paz's most unusual markets and learn about
                local traditions.{" "}
              </p>{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Witches+Market+La+Paz+Bolivia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                {" "}
                Get directions{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-6 col-lg-3">
            {" "}
            <div className="activity-card">
              {" "}
              <div className="activity-image"> Image placeholder </div>{" "}
              <h3>El Alto</h3>{" "}
              <p>
                {" "}
                Experience the energy, markets, views, and cultural life of the
                city above La Paz.{" "}
              </p>{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=El+Alto+Bolivia"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                {" "}
                Get directions{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
export default ThingsToDo;
