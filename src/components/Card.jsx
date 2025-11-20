import React from 'react';

const Card = ({ props }) => {
  return (
    <div className="card">
      <img className="card__poster" src="/posters/mk-11.jpg" alt="poster" />
      <p>{name}</p>
    </div>
  );
};

export default Card;
