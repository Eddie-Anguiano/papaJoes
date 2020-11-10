import React, { Component } from "react";
import FoodCard from "./FoodCard";

export default class SpecialtyPizza extends Component {
  render() {
    return (
      <div className="specialty">
        <div className="menu-heading specialty-heading">Specialty Pizza</div>
        <div className="specialty-card-container">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
    );
  }
}
