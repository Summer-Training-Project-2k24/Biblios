import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ visible, notFoundMessage, resetLinkText }) => {
  if (!visible) return null;

  return (
    <div className="notfound">
      <h2>{notFoundMessage}</h2>
      <Link to="/">{resetLinkText}</Link>
    </div>
  );
};

export default NotFound;