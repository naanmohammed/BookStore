import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navBar">
      <div className="navItems">
        <h2>Bookstore CMS</h2>
        <ul className="navLinks">
          <li><Link to="/" className="books_link">BOOKS</Link></li>
          <li><Link to="categories" className="categories_link">CATEGORIES</Link></li>
        </ul>
      </div>
      <img src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/32/000000/external-avatar-interface-anggara-outline-color-anggara-putra.png" alt="profile" />
    </nav>
  );
}

export default Navbar;
