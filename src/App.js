import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Navbar from './components/navBar';
import Categories from './components/Categories';

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
