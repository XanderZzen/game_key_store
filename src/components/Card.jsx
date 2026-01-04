import React from 'react';
import CartContext from '../context/CartContext';
import { useContext } from 'react';

const Card = ({ gameName, path }) => {
  const { cartCount, addToCart } = useContext(CartContext);
  console.log(cartCount);
  return (
    <div className="card">
      <div className="card__poster_container">
        <img className="card__poster" src={path} alt="poster" />
        {console.log(path)}
      </div>
      <p>{gameName}</p>
      <button onClick={addToCart}>В корзину</button>
    </div>
  );
};

export default Card;
