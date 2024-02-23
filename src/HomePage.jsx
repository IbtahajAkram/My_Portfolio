// HomePage.jsx
import React from 'react';
import Slider from './Slider'; // Assuming you have a Slider component in a separate file

import Portfolio1 from './Portfolio1';

const HomePage = () => {
  const images = ['https://img.peapix.com/8651459169697822534.jpg', 'https://assets.epuzzle.info/puzzle/080/499/original.jpg', 'https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15.jpg']; // Replace with your image paths

  return (
  
    <div className="homepage">
      <h1>Welcome to Our Website</h1>
      <Slider images={images} />
    <Portfolio1/>
    </div>
  );
};

export default HomePage;
