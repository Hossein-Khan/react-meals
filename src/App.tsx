import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState<boolean>(false);

  const showCartHandler = function () {
    setIsCartShown((state) => true);
  };
  const hideCartHandler = function () {
    setIsCartShown((state) => false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onClose={hideCartHandler} />}
      <Header onCartIconClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
