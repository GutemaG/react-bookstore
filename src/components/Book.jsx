import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './styles/Book.css';

const Book = (props) => {
  const { title, author, index } = props;
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBook(index));
  };

  return (
    <div className="book-container">
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="book-actions">
          <button type="button" className="btn btn-comment">
            Comments
          </button>
          |
          <button type="button" className="btn btn-remove" onClick={remove}>
            remove
          </button>
          |
          <button type="button" className="btn btn-edit">
            edit
          </button>
        </div>
      </div>
      <div className="book-progress">
        <h1>Book Progress</h1>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Book;
