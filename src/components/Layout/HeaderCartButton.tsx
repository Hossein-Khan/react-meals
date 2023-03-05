import React from "react";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

type HeaderCartButtonProps = {};

const HeaderCartButton = function (props: HeaderCartButtonProps): JSX.Element {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
