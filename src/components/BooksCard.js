import React from 'react';
import Proptypes from 'prop-types';

function BookCard({ book }) {
  const renderBooks = book.map((book) => (
    <div className="bookContainer" key={book.id}>
      <div className="book">
        <p className="category_display">{book.category}</p>
        <p className="title_display">{book.title}</p>
        <p className="author_display">{book.author}</p>
        <ul className="buttonsList">
          <li><button type="button">Comments |</button></li>
          <li><button type="button">Remove |</button></li>
          <li><button type="button">Edit </button></li>
        </ul>
      </div>
      <div className="bookChart">
        <div className="progress-bar" />
        <div>
          <p>{book.progress}</p>
          <p>COMPLETED</p>
        </div>
      </div>
      <div className="bookChapter">
        <p className="currentChapter_display">{book.currentChapter}</p>
        <p className="chapterNumber_display">{book.chapterNumber}</p>
        <button type="button" className="update_progress_btn">Update Progress</button>
      </div>
    </div>
  ));
  return (
    <div className="mainContainer">
      {renderBooks}
    </div>
  );
}

BookCard.propTypes = {
  book: Proptypes.arrayOf(Proptypes.shape({})).isRequired,
};

export default BookCard;
