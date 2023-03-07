import React, { useReducer } from "react";
import CartItemModel from "../models/CartItemModel";
import CartContext, { CartContextType } from "./cart-context";

type CartProviderProps = { children?: React.ReactNode };

type cartState = { items: CartItemModel[]; totalAmount: number };
type cartAction =
  | { type: "ADD_CART_ITEM"; item: CartItemModel }
  | { type: "REMOVE_CART_ITEM"; id: string };

const initialCarState: cartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = function (state: cartState, action: cartAction) {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      const updatedTotalAmount =
        state.totalAmount + action.item.amount * action.item.price;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems: CartItemModel[] = [];
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
    case "REMOVE_CART_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingCartItem.price;
      let updatedItems: CartItemModel[] = [];
      if (existingCartItem.amount > 1) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.filter(
          (item) => item.id !== existingCartItem.id
        );
      }
      return { items: updatedItems, totalAmount: updatedTotalAmount };
    }
  }
  return initialCarState;
};

const CartProvider = function (props: CartProviderProps): JSX.Element {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCarState
  );

  const addItemToCartHandler = function (item: CartItemModel) {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  };

  const removeItemFromCartHandler = function (id: string) {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
  };

  const cartContex: CartContextType = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContex}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
