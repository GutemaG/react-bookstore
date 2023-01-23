import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import NewBook from '../components/NewBook';

const Books = () => {
  // useSelector
  const books = useSelector((state) => state.bookReducer);
  return (
    <div>
      <div className="book-list-container">
        <ul className="book-list">
          { books.length ? books.map((book) => (
            <li className="book" key={book.id}>
              <Book
                title={book.title}
                author={book.author}
                id={book.id}
                category={book.category}
              />
            </li>
          )) : <h1>No Books</h1> }
        </ul>
        <hr />
        <div className="add-new-book">
          <h1>Add New Book</h1>
          <NewBook />
        </div>
      </div>
    </div>
  );
};
export default Books;
