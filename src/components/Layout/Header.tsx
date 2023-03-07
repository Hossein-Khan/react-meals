import React, { MouseEventHandler } from "react";

import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

type HeaderProps = {
  onCartIconClick: MouseEventHandler<HTMLButtonElement>;
};

const Header = function (props: HeaderProps): JSX.Element {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onCartIconClick} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
