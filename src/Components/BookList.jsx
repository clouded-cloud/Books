
import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;