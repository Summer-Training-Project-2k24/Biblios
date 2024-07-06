// src/App.js
import React from 'react';
import './App.css';
import ImageSlider from './components/ImageSlider';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import NewRelease from './components/NewRelease';


function App() {
    return (
      <div className="App">
        <Header />
        <ImageSlider />
        <Hero />
        <Categories />
        <NewRelease />
      </div>
    );
  }

export default App;
