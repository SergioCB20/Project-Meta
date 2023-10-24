import React, { useState } from "react";
import "../../App.css";

function BookingForm() {
  const [bookingTime, setBookingTime] = useState(""); // Estado para la hora de reserva

  // Un estado variable para las horas disponibles
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleTimeChange = (event) => {
    setBookingTime(event.target.value);
  };

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={bookingTime} onChange={handleTimeChange}>
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

function Reservations() {
  return (
    <main>
      <h1 style={{ marginTop: "20px" }}>Book your Table now!</h1>
      <BookingForm />
    </main>
  );
}

export default Reservations;
