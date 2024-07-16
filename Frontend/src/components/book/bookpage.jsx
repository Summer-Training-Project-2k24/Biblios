import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'; // Updated import
import NotFound from './notfound';
import bookService from './bookservice';

const BookPage = ({ cartService }) => {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); // Updated hook

  useEffect(() => {
    if (id) {
      bookService.getBookById(id).then((serverBook) => {
        setBook(serverBook);
      }).catch(() => {
        setBook(null); // Handle book not found
        navigate('/not-found'); // Use navigate to redirect, adjust the path as needed
      });
    }
  }, [id, navigate]); // Add navigate to the dependency array
  const addToCart = () => {
    cartService.addToCart(book);
    history.push('/cart-page');
  };

  if (!book) {
    return <NotFound visible={true} notFoundMessage="Book Not Found" resetLinkText="Back To Homepage" />;
  }

  return (
    <div className="container">
      <img src={book.imageUrl} alt={book.name} />
      <div className="details">
        <div className="header">
          <span className="name">{book.name}</span>
          <span className={`favorite ${book.favorite ? '' : 'not'}`}>🤎</span>
        </div>
        <div className="author">
          <span><strong>{book.author}</strong></span>
        </div>
        <div className="rating"></div>
        <div className="origins">
          <span>Ratings⭐{book.stars}</span>
        </div>
        <div className="tags">
          {book.tags.map((tag, index) => (
            <Link key={index} to={`/tag/${tag}`}>{tag}</Link>
          ))}
        </div>
        <div className="price">
          <span>{book.price}</span>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default BookPage;
