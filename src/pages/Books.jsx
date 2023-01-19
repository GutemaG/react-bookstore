import React from 'react';
import Book from '../components/Book';
import NewBook from '../components/NewBook';

const Books = () => (
  <div>
    <div className="book-list">
      <Book title="The Hunger Games" author="Suzanne Collins" />
      <Book title="Dune" author="Frank Herbert" />
      <Book title="Capital in the Twenty-First Century" author="Suzanne Collions" />
    </div>
    <div className="add-new-book">
      <NewBook />
    </div>
  </div>
);
export default Books;
