import React from "react";
import pizza from "../images/pizza.svg";

export default function Sizes() {
  return (
    <div className="sizes">
      <div className="sizes-indv">
        <div className="sizes-subheading">Indv. 8"</div>
        <img src={pizza} alt="pizza-indv" className="sizes-img" />
        <div className="sizes-pieces">6 pieces</div>
      </div>
      <div className="sizes-small">
        <div className="sizes-subheading">Small 12"</div>
        <img src={pizza} alt="pizza-small" className="sizes-img" />
        <div className="sizes-pieces">8 pieces</div>
      </div>
      <div className="sizes-medium">
        <div className="sizes-subheading">Medium 14"</div>
        <img src={pizza} alt="pizza-medium" className="sizes-img" />
        <div className="sizes-pieces">10 pieces</div>
      </div>
      <div className="sizes-large">
        <div className="sizes-subheading">Large 16"</div>
        <img src={pizza} alt="pizza-large" className="sizes-img" />
        <div className="sizes-pieces">12 pieces</div>
      </div>
    </div>
  );
}
