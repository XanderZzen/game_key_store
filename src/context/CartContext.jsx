import { createContext, useState } from 'react';

export const CartContext = createContext({
  cartCount: 0,
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    console.log(existingItem);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };
  return (
    <CartContext.Provider
      value={{ cartCount, cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
