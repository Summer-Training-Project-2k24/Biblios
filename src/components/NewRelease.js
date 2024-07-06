// src/components/NewRelease.js
import React from 'react';
import './NewRelease.css';

const NewRelease = () => {
    const books = [
        {
            imgSrc: "https://images.unsplash.com/photo-1507738978512-35798112892c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8fHww",
            title: "Simple Way Of Peace Life"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1507738978512-35798112892c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8fHww",
            title: "Great Travel"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1507738978512-35798112892c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8fHww",
            title: "Once Upon a Time"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1507738978512-35798112892c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8fHww",
            title: "Once Upon a Time"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1507738978512-35798112892c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8fHww",
            title: "Once Upon a Time"
        }
    ];

    return (
        <section className="new-release">
            <h2>New Release Books</h2>
            <div className="book-cards">
                {books.map((book, index) => (
                    <div className="book-card" key={index}>
                        <img src={book.imgSrc} alt={book.title} />
                        <p>{book.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewRelease;
