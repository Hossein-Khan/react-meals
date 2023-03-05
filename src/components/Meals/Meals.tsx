import React from "react";
import AvailableMeals from "./AvailableMeals";

import styles from "./Meals.module.css";
import MealsSummary from "./MealsSummary";

type MealsProps = {};

const Meals = function (props: MealsProps): JSX.Element {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
