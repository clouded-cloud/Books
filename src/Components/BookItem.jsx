
import React from 'react';

const BookItem = ({ book }) => {
  return (
    <li>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
    </li>
  );
};

export default BookItem;