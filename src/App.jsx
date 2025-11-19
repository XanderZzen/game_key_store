import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductCards from './components/ProductCards';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <ProductCards />
        <div>
          {' '}
          Автор иконок:{' '}
          <a
            href="https://www.flaticon.com/ru/authors/frey-wazza"
            title="Frey Wazza"
          >
            {' '}
            Frey Wazza{' '}
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/ru/" title="Flaticon">
            www.flaticon.com'
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
