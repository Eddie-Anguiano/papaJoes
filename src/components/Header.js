import React from "react";
import logo from "../images/pizzamania-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-link header-catering">Catering</div>
      <img src={logo} alt="" className="header-logo" />
      <div className="header-link header-contact">Contact</div>
    </header>
  );
}
