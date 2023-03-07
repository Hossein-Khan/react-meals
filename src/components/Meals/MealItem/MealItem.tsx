import React, { useContext } from "react";
import MealModel from "../../../models/MealModel";
import CartContext from "../../../store/cart-context";

import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

type MealItemProps = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const MealItem = function (props: MealModel): JSX.Element {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = function (amount: number) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
