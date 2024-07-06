// src/components/ImageSlider.js
import React, { useEffect, useState } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 3000;
  const slides = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
    // Add more images as needed
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="image-slider" style={{ transform: `translateX(-${100 * currentIndex}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="image-slide">
            <img src={slide} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
