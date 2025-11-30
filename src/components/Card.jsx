import React from 'react';

const Card = ({ gameName }) => {
  return (
    <div className="card">
      <img className="card__poster" src="/posters/mk-11.jpg" alt="poster" />
      <p>{gameName}</p>
    </div>
  );
};

export default Card;
