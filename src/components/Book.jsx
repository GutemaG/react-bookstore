import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import './styles/Book.css';
import BookProgress from './BookProgress';

const Book = (props) => {
  const {
    title,
    author,
    id,
    category,
  } = props;
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-container">
      <div className="book-info">
        <h4 className="book-category">{category}</h4>
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{author}</p>
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
        <BookProgress />
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
