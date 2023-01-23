import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import './styles/NewBook.css';

const NewBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
    category: '',
  });
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
  };
  return (
    <div>
      <form className="add-new-book-form">
        <input
          className="input input-title"
          placeholder="Book title"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
        <input
          className="input input-author"
          placeholder="Book Author"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
        <select
          className="input category-input"
          name="category"
          value={book.category}
          onChange={handleChange}
        >
          <option value="action">Action</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="economy">Economy</option>
        </select>
        <button type="submit" className="btn submit-btn" onClick={addNewBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default NewBook;
