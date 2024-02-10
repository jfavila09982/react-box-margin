// Home.js
import React from 'react';

const boxStyle = {
    width: '800px',
    height: '500px',
    margin: 'auto',
    marginTop: '50px',
    border: '3px solid #ccc',
    borderRadius: '5px',
    textAlign: 'left',
    padding: '20px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    overflowY: 'auto',
  };

const Home = () => {
  return (
    <div  style={boxStyle}>
      <h2>Home Page</h2>
      <p>Welcome to the home page of your SPA!</p>
    </div>
  );
};

export default Home;
