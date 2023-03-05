import { ChildProcess } from "child_process";
import React, { Children } from "react";

import styles from "./Card.module.css";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = function (props: CardProps): JSX.Element {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
