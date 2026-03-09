import React from 'react';
import './App.css';

import Header from './components/Header';
import Authors from './components/Authors';
import ProductCards from './components/ProductCards';
import CartPage from './components/CartPage';

import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <SearchProvider>
          <CartProvider>
            <div className="wrapper">
              <Header />
              <Routes>
                <Route path="/" element={<ProductCards />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
              <Authors />
            </div>
          </CartProvider>
        </SearchProvider>
      </>
    </BrowserRouter>
  );
}

export default App;
