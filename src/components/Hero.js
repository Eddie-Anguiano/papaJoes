import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FaStream } from "react-icons/fa";
import { IconContext } from "react-icons";
import pizza from "../images/pizza.png";
import shaker from "../images/shaker.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={pizza} alt="" className="hero-pizza" />
      <img src={shaker} alt="" className="hero-shaker" />
      <h2 className="hero-heading">Simply The Best</h2>
      <p className="hero-text">
        Since 1993 Papa Joe's has been serving{" "}
        <span className="hero-highlight">THE VERY BEST PIZZA</span>. We built
        our reputation by using the finest ingredients available. We take pride
        in preparing for you, a pizza that you will enjoy and remember when you
        are ready for your next one. You can call ahead for pickup and delivery
        or enjoy your food in our dining room watching your favorite sporting
        event. Being a staple of the community comes with great pride and
        responsibility. Thanks to the loyalty of our neighbors and friends for
        supporting us through the years.
      </p>
      <div className="hero-cta">
        <IconContext.Provider value={{ className: "hero-fast-icon" }}>
          <FaStream />
        </IconContext.Provider>
        <span>Order For Pickup</span>
      </div>
      <div className="hero-btn-container">
        <button className="hero-btn-menu hero-btn">
          <FiBookOpen />
          <span>View Menu</span>
        </button>
        <button className="hero-btn-phone hero-btn">
          <FiPhone />
          <span>562-944-8803</span>
        </button>
      </div>
    </section>
  );
}
