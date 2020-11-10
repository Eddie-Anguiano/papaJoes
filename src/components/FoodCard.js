import React, { Component } from "react";
import stockPizza from "../images/stock-pizza.jpg";

export default class FoodCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-divider"></div>
        <div className="card-content">
          <div className="card-text">
            <div className="card-top">
              <h3>The Special</h3>
              <p className="card-description">
                Pepperoni, Ham, Onions, Green Peppers
              </p>
            </div>

            <div className="card-prices_container">
              <div className="card-price_container">
                <div className="card-size">Large</div>
                <div className="card-price">8.99</div>
              </div>
              <div className="card-price_container">
                <div className="card-size">Large</div>
                <div className="card-price">8.99</div>
              </div>
              <div className="card-price_container">
                <div className="card-size">Large</div>
                <div className="card-price">8.99</div>
              </div>
              <div className="card-price_container">
                <div className="card-size">Large</div>
                <div className="card-price">8.99</div>
              </div>
            </div>
          </div>
          <img src={stockPizza} alt="" className="card-img" />
        </div>
      </div>
    );
  }
}
