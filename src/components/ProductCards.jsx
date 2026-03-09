import React from 'react';
import Card from './Card';
import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import { CartContext } from '../context/CartContext';
import Pagination from './Pagination';

const ProductCards = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const { searchValue } = useContext(SearchContext);

  console.log(cards);
  //обработка входных данных с сервера
  useEffect(() => {
    const fetchCards = async () => {
      const response = await fetch('http://localhost:3000/cards');
      const data = await response.json();
      setCards(data);
    };
    fetchCards();
  }, []);

  // фильтрация по поиску
  const filteredCards = cards.filter((card) => {
    return card.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  // определяем первую и последнюю карточку товара
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = filteredCards.slice(firstCardIndex, lastCardIndex);

  return (
    <>
      <main className="product-cards">
        {currentCards.map((card) => (
          <Card
            product={card}
            key={card.id}
            gameName={card.name}
            path={card.path}
            price={card.price}
          />
        ))}
      </main>
      <div>
        <Pagination
          totalCards={filteredCards.length}
          cardsPerPage={cardsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ProductCards;
