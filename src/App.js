// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import NewRelease from './components/NewRelease';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <Categories />
                <NewRelease />
            </main>
        </div>
    );
}

export default App;
