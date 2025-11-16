import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img className="header__logo" src="/header-logo.png" alt="logo" />
      </a>
      <a>
        <img src="header__shopping-basket" alt="basket" />
      </a>
    </header>
  );
};

export default Header;
