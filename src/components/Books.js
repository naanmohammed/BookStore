import React from 'react';
import AddBook from './AddBook';
import BookCard from './BooksCard';

function Books() {
  const books = [{
    id: '1',
    category: 'Fiction',
    title: 'The Adventures of Huck Finn',
    author: 'Mark Twain',
  },
  {
    id: '2',
    category: 'Finance',
    title: 'Rich Dad, Poor Dad',
    author: 'Robert Kiyosaki',
  },
  {
    id: '3',
    category: 'Self Development',
    title: 'Atomic Habits',
    author: 'James Clear',
  }];
  return (
    <div>
      {books.map((book) => (
        <BookCard
          key={book.id}
          category={book.category}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook />
    </div>
  );
}
export default Books;
