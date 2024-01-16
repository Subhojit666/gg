// HomePage.js
import React from 'react';
import Wave from '../Components/Wave';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 50vh)' }}>
        <Wave />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
