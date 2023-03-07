import React, { useRef } from "react";

import styles from "./Input.module.css";

type InputProps = {
  lable: string;
  input: { id: string; [attribute: string]: string };
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(function (
  props,
  ref
): JSX.Element {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
