import FoodCard from "./FoodCard";

export default function MenuSection({ foodItems, foodType }) {
  return (
    <div className="MenuSection">
      <div className="menu-heading MenuSection-heading">{foodType}</div>
      <div className="MenuSection-card-container">
        {foodItems.map((item) => {
          return <FoodCard key={item.title} foodItem={item} />;
        })}
      </div>
    </div>
  );
}
