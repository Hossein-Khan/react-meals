import React from "react";

import styles from "./Input.module.css";

type InputProps = {
  lable: string;
  input: { id: string; [attribute: string]: string };
};

const Input = function (props: InputProps): JSX.Element {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
