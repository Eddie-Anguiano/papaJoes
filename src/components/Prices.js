export default function Prices() {
  return (
    <table className="prices">
      <tbody>
        <tr className="prices-row">
          <th className="prices-heading"></th>
          <th className="prices-heading">Indv</th>
          <th className="prices-heading">Small</th>
          <th className="prices-heading">Medium</th>
          <th className="prices-heading">Large</th>
        </tr>
        <tr className="prices-row">
          <th className="prices-heading">Cheese</th>
          <td className="prices-price">6.95</td>
          <td className="prices-price">9.59</td>
          <td className="prices-price">12.10</td>
          <td className="prices-price">14.75</td>
        </tr>
        <tr className="prices-row">
          <th className="prices-heading">1 Topping</th>
          <td className="prices-price">6.05</td>
          <td className="prices-price">10.90</td>
          <td className="prices-price">13.75</td>
          <td className="prices-price">16.80</td>
        </tr>
        <tr className="prices-row">
          <th className="prices-heading">2 Topping</th>
          <td className="prices-price">6.95</td>
          <td className="prices-price">12.0</td>
          <td className="prices-price">15.20</td>
          <td className="prices-price">18.60</td>
        </tr>
        <tr className="prices-row">
          <th className="prices-heading">3 Topping</th>
          <td className="prices-price">7.85</td>
          <td className="prices-price">13.15</td>
          <td className="prices-price">16.65</td>
          <td className="prices-price">20.10</td>
        </tr>
        <tr className="prices-row">
          <th className="prices-heading">Extra Topping</th>
          <td className="prices-price">1.05</td>
          <td className="prices-price">1.35</td>
          <td className="prices-price">1.60</td>
          <td className="prices-price">1.85</td>
        </tr>
        <tr className="prices-row">
          <th className="prices-heading">Add Chicken</th>
          <td className="prices-price">1.50</td>
          <td className="prices-price">1.75</td>
          <td className="prices-price">2.00</td>
          <td className="prices-price">3.35</td>
        </tr>
      </tbody>
    </table>
  );
}
