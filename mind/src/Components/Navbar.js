// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={leftSectionStyle}>
        <span style={appNameStyle}>Mind</span>
      </div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>Home</button>
        <button style={buttonStyle}>Activity</button>
        <button style={buttonStyle}>Personal</button>
      </div>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: 'rgba(128, 128, 0, 0)', // Olive color with 70% opacity
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  padding: '10px',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between', // Space between left and right sections
  alignItems: 'center', // Align items vertically
  zIndex: 1000, // Ensure the navbar appears above other elements
  //backdropFilter: 'blur(10px)', // Optional: Apply a blur effect to the background
};

const leftSectionStyle = {
  display: 'flex',
  alignItems: 'center',
};

const appNameStyle = {
  fontWeight: 'bold',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '24px', // Adjust the size based on your preference
  marginRight: '20px', // Add some margin to separate from the buttons
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const buttonStyle = {
  margin: '0 10px',
  padding: '8px 15px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '5px',
  color: 'white',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontFamily: 'Roboto, sans-serif',
  fontSize: '16px',
};

export default Navbar;
