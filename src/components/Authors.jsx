import React from 'react';

export default function Authors() {
  return (
    <div className="icon-author">
      <a>
        {' '}
        Автор иконок:{' '}
        <a
          className="author-link"
          href="https://www.flaticon.com/ru/authors/frey-wazza"
          title="Frey Wazza"
        >
          {' '}
          Frey Wazza{' '}
        </a>{' '}
        from{' '}
        <a
          className="author-link"
          href="https://www.flaticon.com/ru/"
          title="Flaticon"
        >
          www.flaticon.com'
        </a>
      </a>

      <a>
        <a
          target="_blank"
          href="https://icons8.com/icon/W6yf4QF1Lv1e/cross-mark"
        >
          Крестик
        </a>{' '}
        иконка от{' '}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </a>
    </div>
  );
}
