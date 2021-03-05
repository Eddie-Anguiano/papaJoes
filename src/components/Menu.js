import React from "react";
import PizzaInfo from "./PizzaInfo";
import SpecialtyPizza from "./SpecialtyPizza";

export default function Menu() {
  return (
    <section className="menu">
      <div className="menu-left">
        <PizzaInfo />
        <SpecialtyPizza />
      </div>
      <div className="menu-right"></div>
    </section>
  );
}
