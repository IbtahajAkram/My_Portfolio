import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';



const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const ImgSlider = {
    position: 'relative',
    width: '95%',
    height: '550px', // Adjust height as needed
    overflow: 'hidden',
    margin: '52px auto',
    borderRadius:'15px'
    
  };

  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#333', // Arrow color
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Arrow background color (for visibility)
    padding: '10px', // Padding around the arrow icon
    zIndex: '2', // Ensure arrows are above the slider image
  };

  const leftArrowStyles = {
    ...arrowStyles,
    left: '20px',
  };

  const rightArrowStyles = {
    ...arrowStyles,
    right: '20px',
  };

  const slideStylesWidthBackground = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `url(${images[currentImageIndex]})`,
    zIndex: '1', // Ensure slider image is below arrows
  };

  const dotsContainerStyles = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    zIndex: '2', // Ensure dots are above the slider image
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#333',
    margin: '0 5px',
    cursor: 'pointer',
  };

  const activeDotStyle = {
    ...dotStyle,
    backgroundColor: '#fff',
  };

  
  return (
    <div style={ImgSlider}>
      <div style={slideStylesWidthBackground}></div>
      <div onClick={prevSlide} style={leftArrowStyles}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div onClick={nextSlide} style={rightArrowStyles}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div style={dotsContainerStyles}>
        {images.map((image, index) => (
          <div
            key={index}
            style={index === currentImageIndex ? activeDotStyle : dotStyle}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
