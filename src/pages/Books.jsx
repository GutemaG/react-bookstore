import React from 'react';
import Book from '../components/Book';
import NewBook from '../components/NewBook';

const Books = () => (
  <div>
    <div className="book-list-container">
      <ul className="book-list">
        <li className="book">
          <Book title="The Hunger Games" author="Suzanne Collins" />
        </li>
        <li className="book">
          <Book title="Dune" author="Frank Herbert" />
        </li>
        <li className="book">
          <Book title="Capital in the Twenty-First Century" author="Suzanne Collions" />
        </li>
      </ul>
      <hr />
      <div className="add-new-book">
        <h1>Add New Book</h1>
        <NewBook />
      </div>
    </div>
  </div>
);
export default Books;
