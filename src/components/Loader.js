import pizzaLoader from "../images/pizza-full.svg";

export default function Loader() {
  return (
    <div className="Loader">
      <img className="Loader-img" src={pizzaLoader} alt="pizza loading" />
      <h3>Loading...</h3>
    </div>
  );
}
