import { type } from "os";
import React from "react";
import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

type MealItemFormProps = {};

const MealItemForm = function (props: MealItemFormProps): JSX.Element {
  return (
    <form className={styles.form}>
      <Input
        lable="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
