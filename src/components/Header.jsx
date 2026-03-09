import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const { cartCount, addToCart } = useContext(CartContext);
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="/header-logo.png" alt="logo" />
      </Link>
      <SearchBar />
      <Link to="/cart" className="header__shopping-basket">
        <img src="/basket.png" alt="basket" />
        <div
          className={`header__shopping-basket-counter ${cartCount === 0 ? 'hidden' : ''}`}
        >
          {cartCount}
        </div>
      </Link>
    </header>
  );
};

export default Header;
