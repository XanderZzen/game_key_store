import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
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
