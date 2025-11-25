import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';

const ProductCards = () => {
  const [cards, setCards] = useState([]);
  useEffect(
    () =>
      fetch('http://localhost:3000/cards')
        .then((response) => response.json())
        .then((serverCards) => setCards(serverCards))
        .catch((error) => console.log(error), console.log(cards)),
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
