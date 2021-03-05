import React, { useEffect, useState } from "react";
import PizzaInfo from "./PizzaInfo";
import SpecialtyPizza from "./SpecialtyPizza";
import Client from "../contentful";

export default function Menu() {
  const [pizzas, setPizzas] = useState([]);
  const [salads, setSalads] = useState([]);
  const [apps, setApps] = useState([]);
  const [sandwiches, setSandwiches] = useState([]);

  function formatData(allFoodItems) {
    const pizzaItems = allFoodItems.filter(
      (item) => item.fields.category === "pizza"
    );
    const saladItems = allFoodItems.filter(
      (item) => item.fields.category === "salad"
    );
    const appItems = allFoodItems.filter(
      (item) => item.fields.category === "app"
    );
    const sandwichItems = allFoodItems.filter(
      (item) => item.fields.category === "sandwich"
    );

    function removeExcess(food) {
      return food.map((item) => {
        return {
          title: item.fields.title,
          description: item.fields.description,
          prices: item.fields.sizeAndPrice,
          image: item.fields.image.fields.file.url,
        };
      });
    }

    return {
      pizzas: removeExcess(pizzaItems),
      sandwiches: removeExcess(sandwichItems),
      apps: removeExcess(appItems),
      salads: removeExcess(saladItems),
    };
  }

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await Client.getEntries({
          content_type: "food",
        });
        const allFood = formatData(response.items);
        setPizzas(allFood.pizzas);
        setSalads(allFood.salads);
        setSandwiches(allFood.sandwiches);
        setApps(allFood.apps);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

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
