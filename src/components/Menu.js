import React, { Component } from "react";
import PizzaInfo from "./PizzaInfo";

export default class Menu extends Component {
  render() {
    return (
      <section className="menu">
        <div className="menu-left">
          <PizzaInfo />
        </div>
        <div className="menu-right"></div>
      </section>
    );
  }
}
