import React, { useState, useRef } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

type MealItemFormProps = { onAddToCart: (amount: number) => void };

const MealItemForm = function (props: MealItemFormProps): JSX.Element {
  const [isAmountValid, setIsAmountValid] = useState<boolean>(true);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const onMealsAddition = function (event: React.FormEvent) {
    event.preventDefault();
    const enteredAmount = amountInputRef.current!.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={onMealsAddition}>
      <Input
        ref={amountInputRef}
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
      {!isAmountValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
