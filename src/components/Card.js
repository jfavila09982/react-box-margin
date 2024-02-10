// Card.js

import React from 'react';
import './Card.css'; // Import the styles

const Card = () => {
  return (
    <div className="card">
      <div className="thumbnail"></div>
      <div className="content">
        <h2>Card Title</h2>
        <p>This is a sample card with a thumbnail and a button.</p>
        <a href="#" className="button">Learn More</a>
      </div>
    </div>
  );
};

export default Card;
