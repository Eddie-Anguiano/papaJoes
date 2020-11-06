import React from "react";
import logo from "../images/pizzamania-logo.svg";
import { FiPhone } from "react-icons/fi";
import { IconContext } from "react-icons";
import { RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  return (
    <header className="header">
      <div className="header-phone">
        <IconContext.Provider value={{ className: "header-phone-icon" }}>
          <div>
            <FiPhone />
          </div>
        </IconContext.Provider>
        <div className="header-phone-container">
          <div className="header-phone-text">Order For Pickup!</div>
          <div className="header-phone-number">562-654-2987</div>
        </div>
      </div>
      <img src={logo} alt="" className="header-logo" />
      <div className="header-link header-contact">Contact</div>
      <div className="header-hamburger">
        <IconContext.Provider value={{ className: "header-hamburger-icon" }}>
          <div>
            <RiMenu3Fill />
          </div>
        </IconContext.Provider>
      </div>
    </header>
  );
}
