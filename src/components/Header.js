import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/papa-logo.svg";
import { FiPhone } from "react-icons/fi";
import { IconContext } from "react-icons";
import { RiMenu3Fill } from "react-icons/ri";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleThis = this.handleThis.bind(this);
  }

  handleThis() {
    this.props.menuIsActive();
  }

  render() {
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
            <div className="header-phone-number">562-664-2987</div>
          </div>
        </div>
        <Link to="/" className="header-logo">
          <img src={logo} alt="" />
        </Link>

        <div className="header-link header-contact">Contact</div>
        <div className="header-hamburger">
          <IconContext.Provider value={{ className: "header-hamburger_icon" }}>
            <div>
              <RiMenu3Fill onClick={this.handleThis} />
            </div>
          </IconContext.Provider>
        </div>
      </header>
    );
  }
}
