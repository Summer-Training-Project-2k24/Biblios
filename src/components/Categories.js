// src/components/Categories.js
import React from 'react';
import './Categories.css';

const Categories = () => (
  <div className="categories">
    <h2>Categories</h2>
    <ul>
      <li><a href="/category/fiction">Fiction</a></li>
      <li><a href="/category/non-fiction">Non-Fiction</a></li>
      <li><a href="/category/mystery">Mystery</a></li>
      <li><a href="/category/sci-fi">Sci-Fi</a></li>
    </ul>
  </div>
);

export default Categories;
