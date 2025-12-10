import { createContext } from 'react';

const CartContext = createContext({
  itemCount: 0,
  addToCart: () => {},
});

export default CartContext;
