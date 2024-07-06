// components/NewReleaseSection.js
import React from 'react';
import BookCard from './BookCard';

const NewReleaseSection = () => {
  const books = [
    {
      img: 'https://images.unsplash.com/photo-1507738978512-35798112892c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8fHww',
      title: 'Simple Way Of Peace Life',
      author: 'John Doe',
      description: 'Discover the secrets to a peaceful and fulfilling life in this inspiring book by John Doe.'
    },
    {
      img: 'https://images.unsplash.com/photo-1507738978512-35798112892c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8fHww',
      title: 'Great Travel',
      author: 'Jane Smith',
      description: 'Join Jane Smith on an unforgettable journey through the most beautiful destinations in the world.'
    },
    {
      img: 'https://images.unsplash.com/photo-1507738978512-35798112892c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzfGVufDB8fDB8fHww',
      title: 'Once Upon a Time',
      author: 'Emily Johnson',
      description: 'A captivating tale of love, loss, and redemption by the acclaimed author Emily Johnson.'
    }
  ];

  return (
    <section className="new-release">
      <h2>New Release Books</h2>
      <div className="book-cards">
        {books.map((book, index) => (
          <BookCard
            key={index}
            img={book.img}
            title={book.title}
            author={book.author}
            description={book.description}
          />
        ))}
      </div>
    </section>
  );
};

export default NewReleaseSection;
