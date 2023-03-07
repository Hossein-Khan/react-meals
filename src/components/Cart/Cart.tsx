import React, { MouseEventHandler, useContext } from "react";
import CartItemModel from "../../models/CartItemModel";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import styles from "./Cart.module.css";
import CartItem from "./CartItem";

type CardProps = {
  onClose: MouseEventHandler<HTMLElement>;
};

const Cart = function (props: CardProps): JSX.Element {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const addCartItemEventHamdler = function (item: CartItemModel) {
    cartCtx.addItem(item);
  };

  const removeCartItemEventHamdler = function (id: string) {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-item"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onAdd={addCartItemEventHamdler.bind(null, { ...item, amount: 1 })}
          onRemove={removeCartItemEventHamdler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  return (
    <Modal onBackdropClick={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
