import React from "react";
import CartItemModel from "../models/CartItemModel";

export interface CartContextType {
  items: CartItemModel[];
  totalAmount: number;
  addItem: (item: CartItemModel) => void;
  removeItem: (id: string) => void;
}

const CartContext = React.createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
