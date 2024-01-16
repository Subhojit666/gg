// HomePage.js
import React from 'react';
import Navbar from '../src/Components/Navbar';
import Wave from '../src/Components/Wave';
import Footer from '../src/Components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Wave />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
