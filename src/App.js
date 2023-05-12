import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/books';
import Navbar from './components/navBar';
import Categories from './components/categories';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="categories" element={<Categories />} />
      </Routes>

    </div>

  );
}

export default App;
