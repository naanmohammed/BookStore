import React from 'react';
import AddBook from './addBook';
import BookCard from './booksCard';

function Books() {
  const books = [{
    id: '1',
    category: 'Fiction',
    title: 'The Adventures of Huck Finn',
    author: 'Mark Twain',
    progress: '44%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'Chapter 8',
  },
  {
    id: '2',
    category: 'Finance',
    title: 'Rich Dad, Poor Dad',
    author: 'Robert Kiyosaki',
    progress: '28%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'Chapter 3',
  },
  {
    id: '3',
    category: 'Self Development',
    title: 'Atomic Habits',
    author: 'James Clear',
    progress: '0%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'Preface',
  }];
  return (
    <div>
      <BookCard key={books.id} book={books} />
      <AddBook />
    </div>
  );
}
export default Books;
