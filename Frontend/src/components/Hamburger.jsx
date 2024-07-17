import React, { useState } from 'react';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu} className="hamburger-button">
        ☰
      </button>
      {isOpen && (
        <div className="menu">
          <div class="search-account">
            <a href="http://localhost:5173/Profile">Account</a>
            <a href="http://localhost:5173/login">login</a>
            <a href="#">Wishlist</a>
            </div>
          {/* Add more links as needed */}
        </div>
      )}
    </div>
  );
};

export default Hamburger;
