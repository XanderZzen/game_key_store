import { createContext } from 'react';

const CartContext = createContext({
  cartCount: 0,
  addToCart: () => {},
});

export default CartContext;
