import { useEffect, useState } from "react";
import Map from "./Map";
import pizzaFull from "../images/pizza-full.svg";

export default function Info() {
  const [day, setDay] = useState(0);
  const [open, setIsOpen] = useState(false);

  useEffect(() => {
    const date = new Date("December 23, 1995 23:24:00");
    const currentDay = date.getDay();
    const currentHour = date.getHours();

    if (currentDay === 0 && currentHour >= 10 && currentHour <= 21) {
      setIsOpen(true);
    }
    if (currentDay > 0 && currentHour >= 10 && currentHour <= 22) {
      setIsOpen(true);
    }
    setDay(currentDay);
  }, []);

  const pizzaTag = <img src={pizzaFull} className="hours-pizza" alt="pizza" />;

  return (
    <section className="info">
      <div className="sticky">
        Due to Covid-19 restrictions the we are currently open only for pickup
        orders.
      </div>

      <div className="hours">
        <h2 className="hours-header">Hours</h2>
        <div
          className="hours-time"
          style={
            day === 1
              ? open === true
                ? { color: "#227847" }
                : { color: "#771710" }
              : { color: "#2c2c2c" }
          }>
          {day === 1 ? pizzaTag : null}
          Monday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
          - 11:00pm
        </div>
        <div
          className="hours-time"
          style={
            day === 2
              ? open === true
                ? { color: "#227847" }
                : { color: "#771710" }
              : { color: "#2c2c2c" }
          }>
          {day === 2 ? pizzaTag : null}
          Tuesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
          - 11:00pm
        </div>
        <div
          className="hours-time"
          style={
            day === 3
              ? open === true
                ? { color: "#227847" }
                : { color: "#771710" }
              : { color: "#2c2c2c" }
          }>
          {day === 3 ? pizzaTag : null}
          Wednesday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
          - 11:00pm
        </div>
        <div
          className="hours-time"
          style={
            day === 4
              ? open === true
                ? { color: "#227847" }
                : { color: "#771710" }
              : { color: "#2c2c2c" }
          }>
          {day === 4 ? pizzaTag : null}
          Thursday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
          - 11:00pm
        </div>
        <div
          className="hours-time"
          style={
            day === 5
              ? open === true
                ? { color: "#227847" }
                : { color: "#771710" }
              : { color: "#2c2c2c" }
          }>
          {day === 5 ? pizzaTag : null}
          Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
          - 11:00pm
        </div>
        <div
          className="hours-time"
          style={
            day === 6
              ? open === true
                ? { color: "#227847" }
                : { color: "#771710" }
              : { color: "#2c2c2c" }
          }>
          {day === 6 ? pizzaTag : null}
          Saturday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
          - 11:00pm
        </div>
        <div
          className="hours-time"
          style={
            day === 0
              ? open === true
                ? { color: "#227847" }
                : { color: "#771710" }
              : { color: "#2c2c2c" }
          }>
          {day === 0 ? pizzaTag : null}
          Sunday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00am
          - 10:00pm
        </div>
      </div>

      <div className="contact-container">
        <Map />

        <div className="info-details">
          <div className="info-location">
            <h2 className="info-header">Location</h2>
            <div className="info-address">13547 Telegraph Road</div>
            <div className="info-addressTwo">Whittier Ca, 90605</div>
          </div>
          <div className="info-contact">
            <h2 className="info-header">Contact</h2>
            <div className="info-telephone">Phone: (562) 944-8803</div>
            <div className="info-telephone">Fax: (562) 944-8803</div>
            <div className="info-telephone">email: pizza.mainia@gmail.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}
