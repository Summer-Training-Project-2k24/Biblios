// CarouselComponent.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import circles from './circles.png';

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    '/image1.png',
    '/image2.png',
    '/image3.png',
    './image4.png',
    './image5.png',
  ];

  return (
    <Slider {...settings} className="carousel">
      {images.map((src, index) => (
        

        <div
          key={index}
          className="carousel-slide"
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
    </Slider>
  );
};

export default CarouselComponent;
