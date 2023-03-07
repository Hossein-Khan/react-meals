import React, {
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

type HeaderCartButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const HeaderCartButton = function (props: HeaderCartButtonProps): JSX.Element {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState<Boolean>(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce(
    (currentNumber, item) => currentNumber + item.amount,
    0
  );
  const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);
  return (
    <button className={btnStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
