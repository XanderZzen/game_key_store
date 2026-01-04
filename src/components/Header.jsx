import React from 'react';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

const Header = () => {
  const { cartCount, addToCart } = useContext(CartContext);
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src="/header-logo.png" alt="logo" />
      </a>
      <a className="header__shopping-basket">
        <img src="/basket.png" alt="basket" />
        <div className="header__shopping-basket-counter">{cartCount}</div>
      </a>
    </header>
  );
};

export default Header;
