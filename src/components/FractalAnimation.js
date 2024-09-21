import React from 'react';

const FractalAnimation = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      backgroundImage: 'url(/giphy.webp)', // Path to your .webp file
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat', // Ensure the image doesn't repeat
      backgroundColor: 'black', // Fallback color in case the image doesn't load
    }}>
      {/* You can add any additional content here if needed */}
    </div>
  );
};

export default FractalAnimation;
