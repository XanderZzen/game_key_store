import React from 'react';
import CartContext from '../context/CartContext';
import { useContext } from 'react';

const Card = ({ gameName }) => {
  const { cartCount, addToCart } = useContext(CartContext);
  console.log(cartCount);
  return (
    <div className="card">
      <img className="card__poster" src="/posters/mk-11.jpg" alt="poster" />
      <p>{gameName}</p>
      <button onClick={addToCart}>В корзину</button>
    </div>
  );
};

export default Card;
