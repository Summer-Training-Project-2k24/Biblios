import React from 'react';
//import './genre.css';

const genres = [
  {
    title: "Science Fiction",
    description: "Explore futuristic worlds, advanced technology, and the unknown.",
    icon: "🚀", // Update with actual path to image
  },
  {
    title: "Romance",
    description: "Heartfelt stories of love, passion, and relationships.",
    icon: "❤️",
  },
  {
    title: "Mystery",
    description: "Solve intriguing puzzles and uncover secrets.",
    icon: "🔍",
  },
  {
    title: "Fantasy",
    description: "Dive into magical realms and epic adventures.",
    icon: "🧙‍♂️",
  },
  {
    title: "Non-Fiction",
    description: "Learn about real events, people, and facts.",
    icon: "📘",
  },
  {
    title: "Horror",
    description: "Experience fear and suspense in terrifying tales.",
    icon: "👻",
  },
  {
    title: "Biography",
    description: "Read about the lives of remarkable individuals.",
    icon: "📖",
  },
  {
    title: "Historical",
    description: "Dive into the exciting history of your choice.",
    icon: "📚",
  },
];

function BookGenresSection() {
  return (
    <>
    <h2 className='why-us-section'>Genres you will be able to explore</h2>
    <div className="genres-container">
      {genres.map((genre, index) => (
        <Genre key={genre.title} {...genre} index={index} />
      ))}
    </div>
    </>
  );
}

function Genre({ title, description, icon, backgroundImage, index }) {
  return (
    <div className={`genre-card ${index < 4 ? 'border-bottom' : ''}`} style={{ backgroundImage }}>
      <div className="genre-overlay">
        <div className="genre-icon">{icon}</div>
        <div className="genre-title">{title}</div>
        <p className="genre-description">{description}</p>
      </div>
    </div>
  );
}

export default BookGenresSection;
