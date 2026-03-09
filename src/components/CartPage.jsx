import React, { useContext } from 'react';

import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  console.log(cartItems);
  return (
    <>
      {cartItems.length === 0 ? (
        <p className="cart__status">Корзина пуста</p>
      ) : (
        <>
          <p className="cart__status">Товары в корзине:</p>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.path_small} className="cart__miniposter" />
                <div>{item.name}</div>
                <div>{item.quantity}</div>
                <div>{item.price}</div>
                <div
                  className="cart__cross"
                  onClick={() => removeFromCart(item.id)}
                >
                  <img src="/cross1.png" />
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default CartPage;
