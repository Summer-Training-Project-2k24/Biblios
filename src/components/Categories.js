import React from 'react';
import './styles.css';

const Categories = () => {
  return (
    <section className="categories">
      <h2>Explore our Top Categories</h2>
      <div className="categories-navigation">
        <button className="prev">←</button>
        <button className="next">→</button>
      </div>
      <div className="categories-content">
        <div className="category-card">
          <img src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="Higher Education" />
          <h3>Higher Education</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat.</p>
        </div>
        <div className="category-card">
          <img src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="Management Books" />
          <h3>Management Books</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat.</p>
        </div>
        <div className="category-card">
          <img src="https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="Engineering Books" />
          <h3>Engineering Books</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat.</p>
        </div>
      </div>
      <a href="#" className="view-more">View More →</a>
    </section>
  );
};

export default Categories;
