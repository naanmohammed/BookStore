import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, getBooks } from '../redux/books/booksSlice';

function BookCard() {
  const { books, isLoading, isError } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: try again</div>;
  }

  const renderBooks = books.map((book) => (
    <div key={book.item_id} className="bookContainer">
      <div className="book">
        <p className="category_display">{book.category}</p>
        <p className="title_display">{book.title}</p>
        <p className="author_display">{book.author}</p>
        <ul className="buttonsList">
          <li><button type="button">Comments |</button></li>
          <li><button type="button" onClick={() => dispatch(deleteBook(book.item_id))}>Remove |</button></li>
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
  ));

  return (
    <div className="mainContainer">
      {renderBooks}
    </div>
  );
}

export default BookCard;
