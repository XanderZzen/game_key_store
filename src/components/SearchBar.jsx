import React from 'react';
import { useState, useContext } from 'react';
import { SearchContext } from '../context/SearchContext';

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  console.log(searchValue);
  return (
    <div>
      <input
        className="header__search-bar"
        type="text"
        placeholder="Поиск игр..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
