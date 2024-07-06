// components/BookCard.js
import React from 'react';

const BookCard = ({ img, title, author, description }) => {
  return (
    <div className="book-card">
      <img src={img} alt={title} />
      <div className="book-info">
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{description}</p>
        <button className="details-button">More Details</button>
      </div>
    </div>
  );
};

export default BookCard;
