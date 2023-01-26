import React from 'react';
import './styles/BookProgress.css';

const BookProgress = () => (
  <div className="book-progress-container">
    <div className="book-progress-circular-container">
      <div className="circular-progress" />
      <div className="progress-percentage">
        <span className="progress-percentage-number">64%</span>
        <span className="progress-percentage-completed">Completed</span>
      </div>
    </div>
    <div className="divider" />
    <div className="book-progress-current-chapter-container">
      <h3>Current Chapter</h3>
      <h4 className="current-chapter">Chapter 17</h4>
      <button type="button" className="btn btn-update-progress">Update Progress</button>
    </div>
  </div>
);

export default BookProgress;
