import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import MealModel from "../../models/MealModel";
import MealsModel from "../../models/MealModel";
import Card from "../UI/Card";

import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS: MealsModel[] = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

type AvailableMealsProps = {};

const AvailableMeals = function (props: AvailableMealsProps): JSX.Element {
  const [meals, setMeals] = useState<MealModel[]>([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();
  useEffect(() => {
    fetchMeals(
      {
        url: "https://react-http-4ee6a-default-rtdb.europe-west1.firebasedatabase.app/meal.json",
      },
      (mealsObj) => {
        const DUMMY_MEALS: MealModel[] = [];
        for (const mealKey in mealsObj) {
          DUMMY_MEALS.push({
            id: mealKey,
            name: mealsObj[mealKey].name,
            description: mealsObj[mealKey].description,
            price: mealsObj[mealKey].price,
          });
        }
        setMeals(DUMMY_MEALS);
      }
    );
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content = <ul>{mealsList}</ul>;
  if (mealsList.length === 0) {
    content = <p>Nothing to show!</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = (
      <div>
        <p>{error}</p>
        <p>Please check your Internet connection!</p>
      </div>
    );
  }
  return (
    <section className={styles.meals}>
      <Card className={styles.center}>{content} </Card>
    </section>
  );
};

export default AvailableMeals;
