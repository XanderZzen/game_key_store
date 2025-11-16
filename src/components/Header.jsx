import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img className="" src="/header-logo.png" alt="logo" />
      </a>
      <a className="header__shopping-basket">
        <img src="/basket.png" alt="basket" />
      </a>
    </header>
  );
};

export default Header;
