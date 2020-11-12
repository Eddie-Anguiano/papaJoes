import React from "react";

export default function Toppings() {
  return (
    <table className="toppings">
      <tbody>
        <tr>
          <th>Toppings</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td>Sausage</td>
          <td>Bacon</td>
          <td>Mushrooms</td>
          <td>Tomato</td>
        </tr>
        <tr>
          <td>Salami</td>
          <td>Beef</td>
          <td>Onions</td>
          <td>Jalapenos</td>
        </tr>
        <tr>
          <td>Peperoni</td>
          <td>Anchovies</td>
          <td>Olives</td>
          <td>Pinapple</td>
        </tr>
        <tr>
          <td>Ham</td>
          <td>Shrimp</td>
          <td>Green Peppers</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
