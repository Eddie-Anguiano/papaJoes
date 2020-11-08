import React from "react";
import Sizes from "./Sizes";
import Prices from "./Prices";
import Toppings from "./Toppings";

export default function PizzaInfo() {
  return (
    <div className="pizzaInfo">
      <div className="pizzaInfo-heading  menu-heading">Pizza</div>
      <Sizes />
      <Prices />
      <Toppings />
    </div>
  );
}
