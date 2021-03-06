export default function FoodCard({ foodItem }) {
  return (
    <div className="card">
      <div className="card-divider"></div>
      <div className="card-content">
        <div className="card-text">
          <div className="card-top">
            <h3>{foodItem.title}</h3>
            <p className="card-description">{foodItem.description}</p>
          </div>

          <div className="card-prices_container">
            <div className="card-price_container">
              <div className="card-size">
                {foodItem.prices.one ? foodItem.prices.one.size : null}
              </div>
              <div className="card-price">
                {foodItem.prices.one ? foodItem.prices.one.price : null}
              </div>
            </div>
            <div className="card-price_container">
              <div className="card-size">
                {foodItem.prices.two ? foodItem.prices.two.size : null}
              </div>
              <div className="card-price">
                {foodItem.prices.two ? foodItem.prices.two.price : null}
              </div>
            </div>
            <div className="card-price_container">
              <div className="card-size">
                {foodItem.prices.three ? foodItem.prices.three.size : null}
              </div>
              <div className="card-price">
                {foodItem.prices.three ? foodItem.prices.three.price : null}
              </div>
            </div>
            <div className="card-price_container">
              <div className="card-size">
                {foodItem.prices.four ? foodItem.prices.four.size : null}
              </div>
              <div className="card-price">
                {foodItem.prices.four ? foodItem.prices.four.price : null}
              </div>
            </div>
          </div>
        </div>
        <div className="card-imageContainer">
          <img src={foodItem.image} alt="" className="card-img" />
        </div>
      </div>
    </div>
  );
}
