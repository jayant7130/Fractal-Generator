import React, { useState } from 'react';
import FractalAnimation from './FractalAnimation';
import Panel from './Panel';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [started, setStarted] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleStart = () => {
    setStarted(true);
    navigate('/generate');  // Navigate to the Fractal Generator page
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden', position: 'relative' }}>
      {!started && (
        <>
          <FractalAnimation />
          <Panel onStart={handleStart} />
        </>
      )}
    </div>
  );
};

export default LandingPage;
