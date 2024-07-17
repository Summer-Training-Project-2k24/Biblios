import React from 'react';
import './landing.css';

const WhyUsCard = ({ title, description, image }) => {
  return (
    <div className="why-us-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
    
  );
};

export default WhyUsCard;

