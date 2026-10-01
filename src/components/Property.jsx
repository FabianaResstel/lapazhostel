import { useState } from "react";
import hostelEntrance from "../images/hostel-entrance.webp";
import diningRoom from "../images/dining-room.webp";
import fourBeds from "../images/four-beds.webp";
import sixBeds from "../images/six-beds.webp";
const rooms = [
  { id: "fourBed", price: 15, image: fourBeds },
  { id: "sixBed", price: 10, image: sixBeds },
];
function Property({ t }) {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function calculateNights(startDate, endDate) {
    const [startYear, startMonth, startDay] = startDate.split("-").map(Number);
    const [endYear, endMonth, endDay] = endDate.split("-").map(Number);
    const start = Date.UTC(startYear, startMonth - 1, startDay);
    const end = Date.UTC(endYear, endMonth - 1, endDay);
    return (end - start) / (1000 * 60 * 60 * 24);
  }
  const selectedRoomData = rooms.find((room) => room.id === selectedRoom);
  const nights = checkIn && checkOut ? calculateNights(checkIn, checkOut) : 0;
  const total = selectedRoomData ? selectedRoomData.price * nights : 0;
  function handleSubmit(event) {
    event.preventDefault();
    if (nights <= 0) {
      return;
    }
    setSubmitted(true);
  }
  return (
    <main>
      {" "}
      <section className="property-section">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center">
            {" "}
            <p className="section-eyebrow">{t.property.eyebrow}</p>{" "}
            <h1>{t.property.title}</h1>{" "}
            <p className="section-intro">{t.property.intro}</p>{" "}
          </div>{" "}
          <div className="row g-4">
            {" "}
            <div className="col-md-6">
              {" "}
              <div className="property-image">
                {" "}
                <img src={hostelEntrance} alt="Hostel entrance" />{" "}
              </div>{" "}
              <h2>{t.property.facilities.entrance}</h2>{" "}
            </div>{" "}
            <div className="col-md-6">
              {" "}
              <div className="property-image">
                {" "}
                <img src={diningRoom} alt="Hostel dining room" />{" "}
              </div>{" "}
              <h2>{t.property.facilities.dining}</h2>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="rooms-section">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center">
            {" "}
            <p className="section-eyebrow">{t.property.rooms.eyebrow}</p>{" "}
            <h2>{t.property.rooms.title}</h2>{" "}
          </div>{" "}
          <div className="row g-4">
            {" "}
            {rooms.map((room) => (
              <div className="col-md-6" key={room.id}>
                {" "}
                <div className="room-card">
                  {" "}
                  <div className="room-image">
                    {" "}
                    <img
                      src={room.image}
                      alt={t.property.rooms[room.id].title}
                    />{" "}
                  </div>{" "}
                  <h3>{t.property.rooms[room.id].title}</h3>{" "}
                  <p>{t.property.rooms[room.id].description}</p>{" "}
                  <p className="room-bathroom"> {t.property.rooms.bathroom} </p>{" "}
                  <p>
                    {" "}
                    ${room.price} {t.property.rooms.perNight}{" "}
                  </p>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      <section className="reservation-section">
        {" "}
        <div className="container">
          {" "}
          <div className="text-center">
            {" "}
            <p className="section-eyebrow">
              {" "}
              {t.property.reservation.eyebrow}{" "}
            </p>{" "}
            <h2>{t.property.reservation.title}</h2>{" "}
            <p className="section-intro">
              {" "}
              {t.property.reservation.intro}{" "}
            </p>{" "}
          </div>{" "}
          <div className="reservation-placeholder">
            {" "}
            <form onSubmit={handleSubmit}>
              {" "}
              <div className="mb-4">
                {" "}
                <label className="form-label">
                  {" "}
                  {t.property.reservation.chooseRoom}{" "}
                </label>{" "}
                {rooms.map((room) => (
                  <div className="form-check" key={room.id}>
                    {" "}
                    <input
                      className="form-check-input"
                      type="radio"
                      name="room"
                      id={room.id}
                      value={room.id}
                      checked={selectedRoom === room.id}
                      onChange={(event) => setSelectedRoom(event.target.value)}
                      required
                    />{" "}
                    <label className="form-check-label" htmlFor={room.id}>
                      {" "}
                      {t.property.rooms[room.id].title} — ${room.price}/{" "}
                      {t.property.rooms.perNight}{" "}
                    </label>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
              <div className="mb-4">
                {" "}
                <label htmlFor="check-in" className="form-label">
                  {" "}
                  {t.property.reservation.checkIn}{" "}
                </label>{" "}
                <input
                  type="date"
                  className="form-control"
                  id="check-in"
                  value={checkIn}
                  onChange={(event) => {
                    setCheckIn(event.target.value);
                    setSubmitted(false);
                  }}
                  required
                />{" "}
              </div>{" "}
              <div className="mb-4">
                {" "}
                <label htmlFor="check-out" className="form-label">
                  {" "}
                  {t.property.reservation.checkOut}{" "}
                </label>{" "}
                <input
                  type="date"
                  className="form-control"
                  id="check-out"
                  value={checkOut}
                  min={checkIn}
                  onChange={(event) => {
                    setCheckOut(event.target.value);
                    setSubmitted(false);
                  }}
                  required
                />{" "}
              </div>{" "}
              {nights > 0 && (
                <div className="reservation-summary">
                  {" "}
                  <p>
                    {" "}
                    <strong>{t.property.reservation.nights}:</strong>{" "}
                    {nights}{" "}
                  </p>{" "}
                  <p>
                    {" "}
                    <strong>{t.property.reservation.total}:</strong> ${" "}
                    {total}{" "}
                  </p>{" "}
                </div>
              )}{" "}
              <button
                type="submit"
                className="btn"
                disabled={!selectedRoom || !checkIn || !checkOut || nights <= 0}
              >
                {" "}
                {t.property.reservation.button}{" "}
              </button>{" "}
              {submitted && (
                <p className="reservation-success" role="status">
                  {" "}
                  {t.property.reservation.success}{" "}
                </p>
              )}{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </main>
  );
}
export default Property;
