import React from 'react';
import a2 from '../assets/a2.jpeg';
import s from '../assets/s.jpeg';
import h from '../assets/h.jpeg';
import m from '../assets/m.jpeg';

export default function () {
  return (
    <div className="about">
      <h1 className="head">About Us</h1>
      <p className="us">
        <i>Your go-to online destination for a diverse selection of books, connecting readers with stories that inspire, educate, and entertain.</i>
      </p>
      <div className="content">
        <div className="img">
          <img
            className="about-image"
            loading="lazy"
            src="https://i.pinimg.com/474x/a3/eb/1e/a3eb1e5d87229ecdea29bfcd04453123.jpg"
            alt="About Us"
          />
        </div>
        <div className="para">
          <h1 className="head3">Who are we?</h1>
          <p>
            We are a passionate team of book lovers dedicated to bringing the best reading experience to our customers. Our bookstore offers a curated collection of books across various genres, from timeless classics to contemporary bestsellers. We believe in the power of stories to transform lives and aim to foster a community where readers can discover new favorites and share their literary journeys. Our mission is to make quality books accessible to everyone, while providing exceptional customer service. Join us in celebrating the joy of reading and exploring the endless worlds within the pages of a book.
          </p>
        </div>
      </div>
      <section className="team">
        <h1 className="head2">Our Team</h1>
        <div className="team-members">
          <div className="team-member">
            <img src={a2} alt="Team Member 1" />
            <h3>Arpita</h3>
            <p>Aprita, a computer science student and avid reader, contributes her enthusiasm for literature and coding expertise to our project</p>
          </div>
          <div className="team-member">
            <img src={s} alt="Team Member 2" />
            <h3>Shavi</h3>
            <p>Shavi, a computer science student and a passionate reader. She brings her love for books and technical skills to the team</p>
          </div>
          <div className="team-member">
            <img src={h} alt="Team Member 3" />
            <h3>Hitesh</h3>
            <p>Hitesh, a computer science student who brings his technical knowledge and collaborative spirit to enhance our bookstore experience</p>
          </div>
          <div className="team-member">
            <img src={m} alt="Team Member 4" />
            <h3>Medhansh</h3>
            <p>Medhansh, a computer science student, plays a vital role in the team with his strong technical background and dedication to the project</p>
          </div>
        </div>
      </section>
    </div>
  );
}
