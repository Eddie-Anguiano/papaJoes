import React, { Component } from "react";
import PizzaInfo from "./PizzaInfo";
import SpecialtyPizza from "./SpecialtyPizza";

export default class Menu extends Component {
  render() {
    return (
      <section className="menu">
        <div className="menu-left">
          <PizzaInfo />
          <SpecialtyPizza />
        </div>
        <div className="menu-right">
          <PizzaInfo />
          <SpecialtyPizza />
        </div>
      </section>
    );
  }
}
