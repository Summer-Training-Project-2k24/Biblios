import React, { useEffect, useState } from 'react';
import './styles.css';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 5;
  const intervalTime = 3000;

  const slides = [
    'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3N8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1616330682546-2468b2d8dd17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2tzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1507738978512-35798112892c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1608659597669-b45511779f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1522407183863-c0bf2256188c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2tzfGVufDB8fDB8fHww'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % totalSlides);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex, totalSlides]);

  const currentSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>Ipsum Dolor Si</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
          <a href="#" className="read-more">Read More →</a>
          <div className="dot-navigation">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => currentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-images">
        <div className="image-slider" style={{ transform: `translateX(-${100 * currentIndex}%)` }}>
          {slides.map((slide, index) => (
            <div className="image-slide" key={index}>
              <img src={slide} alt={`Book ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
