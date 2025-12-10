import { useState, useContext } from 'react';
import CartContext from './CartContext';

export const CartProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState(0);

  const addToCart = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  return (
    <CartContext.Provider value={{ itemCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
