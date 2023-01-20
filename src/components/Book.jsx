import React from 'react';
import PropTypes from 'prop-types';
import './styles/Book.css';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book-container">
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author}</p>
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
};

export default Book;
