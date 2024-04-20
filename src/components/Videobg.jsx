import React, { useState, useEffect } from 'react';
import animeLarge from '../assets/f.mp4';
import animeSmall from '../assets/phone.mp4';

const Videobg = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className='main'>
      {/* Conditional rendering based on device size */}
      {isSmallDevice ? (
        <video src={animeSmall} autoPlay loop muted />
      ) : (
        <video src={animeLarge} autoPlay loop muted />
      )}
    </div>
  );
};

export default Videobg;
