import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import NewBook from '../components/NewBook';
import { fetchBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
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
        <hr className="horizontal-divider" />
        <div className="add-new-book">
          <h1>Add New Book</h1>
          <NewBook />
        </div>
      </div>
    </div>
  );
};
export default Books;
