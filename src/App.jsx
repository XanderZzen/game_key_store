import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductCards from './components/ProductCards';
import { CartProvider } from './context/CartProvider';

function App() {
  return (
    <>
      <CartProvider>
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
      </CartProvider>
    </>
  );
}

export default App;
