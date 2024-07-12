import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ReviewList.css';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="review-list">
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <div key={review._id} className="review-item">
            <h3>{review.name}</h3>
            <p>{review.message}</p>
            <p>Rating: {review.rating}/5</p>
            <p>{new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewList;
