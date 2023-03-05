import React from "react";
import CartItemModel from "../../models/CartItemModel";

import styles from "./Card.module.css";

type CardProps = {};

const Card = function (props: CardProps): JSX.Element {
  const cartItems = (
    <ul className={styles["cart-item"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  );
};

export default Card;
