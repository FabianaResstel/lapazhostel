const restaurants = [
  {
    id: "manqa",
    mapsUrl:
      "https://www.google.com/maps/place/Manq'a+Restaurante/@-16.5101357,-68.12891,17z/data=!3m1!4b1!4m9!1m2!2m1!1sgoogle+maps+open+now!3m5!1s0x915f21c4cdfa0df7:0x15d2bfa733a5b7b9!8m2!3d-16.5101409!4d-68.1263351!16s%2Fg%2F11h0_p93w9?entry=ttu",
  },
  {
    id: "banais",
    mapsUrl:
      "https://www.google.com/maps/place/Caf%C3%A9+Restaurante+Banais/@-16.4967865,-68.1398332,17z/data=!3m1!4b1!4m6!3m5!1s0x915f2074073ee0e3:0x75892032eff12382!8m2!3d-16.4967917!4d-68.1372583!16s%2Fg%2F11c2pv54tm?entry=ttu",
  },
  {
    id: "cafeVida",
    mapsUrl:
      "https://www.google.com/maps/place/Cafe+Vida/@-16.4987726,-68.140007,17z/data=!3m1!4b1!4m6!3m5!1s0x915f2076a099d439:0xec8013e169340ca0!8m2!3d-16.4987778!4d-68.1374321!16s%2Fg%2F11c5bnq2_5?entry=ttu",
  },
];
function Restaurants({ t }) {
  return (
    <section id="eat" className="restaurants-section">
      {" "}
      <div className="container">
        {" "}
        <div>
          {" "}
          <p className="section-eyebrow">{t.restaurants.eyebrow}</p>{" "}
          <h2>{t.restaurants.title}</h2>{" "}
          <p className="section-intro">{t.restaurants.intro}</p>{" "}
        </div>{" "}
        <div className="row g-4">
          {" "}
          {restaurants.map((restaurant) => (
            <div className="col-md-6 col-lg-4" key={restaurant.id}>
              {" "}
              <div className="restaurant-card">
                {" "}
                <div className="restaurant-image">Image placeholder</div>{" "}
                <h3>{t.restaurants.items[restaurant.id].name}</h3>{" "}
                <p>{t.restaurants.items[restaurant.id].description}</p>{" "}
                <p className="restaurant-address">
                  {" "}
                  {t.restaurants.items[restaurant.id].address}{" "}
                </p>{" "}
                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  {" "}
                  {t.restaurants.button}{" "}
                </a>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
export default Restaurants;
