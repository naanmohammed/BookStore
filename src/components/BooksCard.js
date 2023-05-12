import React from 'react';
import Proptypes from 'prop-types';

function BookCard({
  title, category, author,
}) {
  return (
    <div className="bookContainer">
      <div className="book">
        <p className="category_display">{category}</p>
        <p className="title_display">{title}</p>
        <p className="author_display">{author}</p>
        <ul className="buttonsList">
          <li><button type="button">Comments |</button></li>
          <li><button type="button">Remove |</button></li>
          <li><button type="button">Edit </button></li>
        </ul>
      </div>
      <div className="bookChart">
        <div className="progress-bar" />
        <div>
          <p>28%</p>
          <p>COMPLETED</p>
        </div>
      </div>
      <div className="bookChapter">
        <p className="currentChapter_display">10</p>
        <p className="chapterNumber_display">Current Chapter</p>
        <button type="button" className="update_progress_btn">Update Progress</button>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  title: Proptypes.string.isRequired,
  category: Proptypes.string.isRequired,
  author: Proptypes.string.isRequired,
};

export default BookCard;
