import React from 'react';
import './App.css';
import BookList from './components/BookList';

const App = () => {
  const books = [
    { id: 1, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
  ];

  return (
    <div className="App">
      <BookList books={books} />
    </div>
  );
};

export default App;