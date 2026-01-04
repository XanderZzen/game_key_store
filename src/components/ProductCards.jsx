import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';
import Pagination from './Pagination';

const ProductCards = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);

  //обработка входных данных с сервера
  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch('http://localhost:3000/cards');
      const data = await response.json();
      setCards(data);
    };
    fetchCards();
  }, []);

  // определяем первую и последнюю карточку товара
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = cards.slice(firstCardIndex, lastCardIndex);

  return (
    <>
      <main className="product-cards">
        {currentCards.map((card) => (
          <Card key={card.id} gameName={card.name} path={card.path} />
        ))}
      </main>
      <div>
        <Pagination
          totalCards={cards.length}
          cardsPerPage={cardsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ProductCards;
