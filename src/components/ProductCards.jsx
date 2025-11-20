import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';

const ProductCards = () => {
  useEffect(
    () =>
      fetch('http://localhost:3000/cards')
        .then((response) => response.json())
        .then((cards) => console.log(cards))
        .catch((error) => console.log(error)),
    []
  );

  return (
    <main className="product-cards">
      {cards.map((card) => (
        <Card key={card.id} gname={card.className} />
      ))}
    </main>
  );
};

export default ProductCards;
