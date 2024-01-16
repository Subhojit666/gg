// Wave.js
import React from 'react';
import WelcomeMessage from '../Components/WelcomeMessage';
import Navbar from '../Components/Navbar';

const Wave = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh', // Ensure the component covers the entire viewport height
        overflow: 'hidden',
      }}
    >
      <Navbar />
      <WelcomeMessage />
      <img
        src={process.env.PUBLIC_URL + '/images/sea.jpg'}
        alt="Calm Sea"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1, // Ensure the image is behind other content
        }}
      />
    </div>
  );
};

export default Wave;
