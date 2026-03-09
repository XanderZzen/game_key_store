import React from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { useContext } from 'react';

const Card = ({ product, gameName, path, price }) => {
  const { cartCount, addToCart } = useContext(CartContext);
  return (
    <div className="card">
      <div className="card__poster_container">
        <img className="card__poster" src={path} alt="poster" />
      </div>
      <p className="card__name">{gameName}</p>
      <div className="card__price_bar">
        <p>{price}</p>
        <button className="card__cart_btn" onClick={() => addToCart(product)}>
          <img src="/basket.png"></img>
        </button>
      </div>
    </div>
  );
};

export default Card;
