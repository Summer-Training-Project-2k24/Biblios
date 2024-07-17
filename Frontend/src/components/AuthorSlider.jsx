import React, { useState } from 'react';
import './landing.css';
import ana from '../assets/ana.jpg';
import dov from '../assets/dov.jpg';
import rynx from '../assets/rynx.jpg';
import jk from '../assets/jk.jpg';
import kiran from '../assets/kiran.jpg';

const authors = [
  {
    name: 'JK Rowling',
    bio: 'J.K. Rowling is a British author best known for creating the "Harry Potter" series, which has captivated millions of readers worldwide and become a cultural phenomenon. Her imaginative storytelling, richly developed characters, and intricate plots have solidified her as one of the most influential writers of modern literature.',
    image: jk
  },

  {
    name: 'Fyodor Dostoevsky',
    bio: 'Fyodor Dostoevsky was a Russian novelist whose works, such as "Crime and Punishment" and "The Brothers Karamazov," explore deep psychological and philosophical themes. His writing delves into the complexities of the human soul, morality, and existentialism, leaving a profound impact on literature.',
    image: dov
  },

  {
    name: 'Ana Huang',
    bio: 'Ana Huang is a #1 New York Times, Sunday Times, Wall Street Journal, USA Today, and #1 Amazon bestselling author. Best known for her Twisted series, she writes new adult and contemporary romance. Her books have been translated in over two dozen languages and featured in outlets such as NPR, Cosmopolitan, Financial Times, and Glamour UK',
    image: ana
  },

  {
    name: 'Kiran Desai',
    bio: 'Kiran Desai is an Indian author. Her novel The Inheritance of Loss won the 2006 Man Booker Prize and the National Book Critics Circle Fiction Award. In January 2015, The Economic Times listed her as one of 20 "most influential" global Indian women.',
    image: kiran
  },

  {
    name: 'Rynx',
    bio: 'RuNyx immerses her readers in the dark worlds she builds and then injects life into them in the most hauntingly beautiful way. Her work is unique and addictive—she really is one of a kind.',
    image: rynx
  }

];

const AuthorSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % authors.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + authors.length) % authors.length);
  };

  return (
    <>
    <div className="author-slider">
      <div className="author-card">
        
      <h1>Our Author</h1>
        <img src={authors[currentSlide].image} alt={authors[currentSlide].name} className="author-image" />
        <div className="author-content">
          <h3>{authors[currentSlide].name}</h3>
          <p>{authors[currentSlide].bio}</p>
        </div>
      </div>
      <div className="slider-controls">
        <button onClick={prevSlide} className="slider-button">&lt;</button>
        <button onClick={nextSlide} className="slider-button">&gt;</button>
      </div>
    </div>
    </>
  );
};

export default AuthorSlider;

