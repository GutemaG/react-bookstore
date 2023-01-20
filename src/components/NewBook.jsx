import React from 'react';
import './styles/NewBook.css';

const NewBook = () => (
  <div>
    <form className="add-new-book-form">
      <input className="input input-title" placeholder="Book title" name="title" value="" />
      <select className="input category-input">
        <option value="action">Action</option>
        <option value="science-fiction">Science Fiction</option>
        <option value="economy">Economy</option>
      </select>
      <button type="submit" className="btn submit-btn">Add Book</button>
    </form>
  </div>
);

export default NewBook;
