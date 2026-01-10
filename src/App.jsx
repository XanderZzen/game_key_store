import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductCards from './components/ProductCards';
import { CartProvider } from './context/CartProvider';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <CartProvider>
          <div className="wrapper">
            <Header />
            <ProductCards />
            <div className="icon-author">
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
    </Router>
  );
}

export default App;
