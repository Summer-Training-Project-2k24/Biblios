// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">
      <h2>Biblio</h2>
    </div>
    <nav>
      <ul className="nav-links">
        <li><a href="/home" className="active">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/books">Books</a></li>
        <li><a href="/new-release">New Release</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
    <div className="search-account">
      <input type="text" placeholder="Search Books" />
      <a href="/account">Account</a>
      <a href="/cart">Cart(0)</a>
      <a href="/wishlist">Wishlist</a>
    </div>
  </header>
);

export default Header;
