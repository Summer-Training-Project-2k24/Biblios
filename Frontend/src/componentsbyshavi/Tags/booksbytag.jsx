import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BooksByTag.css';

const BooksByTag = () => {
  const { tagName } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/tag/${tagName}`);
        console.log('Fetched books:', response.data); // This should show the books in the console
        setBooks(response.data); // Ensure the state is being updated
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [tagName]);

  return (
    <div className="books-container">
      <h1>Books tagged with "{tagName}"</h1>
      <div className="books-list">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book._id} className="book-item">
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              {/* Add other book details here if needed */}
            </div>
          ))
        ) : (
          <p>No books found for this tag.</p>
        )}
      </div>
    </div>
  );
};

export default BooksByTag;
