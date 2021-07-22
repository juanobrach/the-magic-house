import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const addProduct = (product) => {
    const cartItem = { ...product };
    cartItem.quantity = 1;
    delete cartItem.imageSrc;

    setCartItems([...cartItems, cartItem]);
  };

  const removeProduct = (productIndex) => {
    const products = cartItems.filter((item, index) => index !== productIndex);
    setCartItems(products);
  };

  let sharedState = {
    cartItems,
    cartTotal,
    addProduct,
    removeProduct,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
