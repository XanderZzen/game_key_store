import React from 'react';

const Pagination = ({ totalCards, cardsPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pages.push(i);
  }
  console.log(pages);
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
