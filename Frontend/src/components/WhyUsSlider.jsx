// src/WhyUsSlider.js
import React, { useState } from 'react';
import WhyUsCard from './WhyUsCard';
//import './WhyUsSlider.css';
import money from "./images/money.jpg"
import customer from './images/customer.jpg'
import books from './images/books.jpg'
const slides = [
  {
    title: 'Wide Selection',
    description: 'We offer a vast selection of books from various genres to cater to all readers.',
    image: books
  },
  {
    title: 'Competitive Prices',
    description: 'Enjoy competitive prices and great discounts on bestsellers and new arrivals.',
    image: money
  },
  {
    title: 'Customer Satisfaction',
    description: 'Our priority is to ensure customer satisfaction with quality service and support.',
    image: customer
  }
];

const WhyUsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="why-us-slider">
      <WhyUsCard {...slides[currentSlide]} />
      <div className="slider-controls">
        <button onClick={prevSlide} className="slider-button">&lt;</button>
        <button onClick={nextSlide} className="slider-button">&gt;</button>
      </div>
    </div>
  );
};

export default WhyUsSlider;
