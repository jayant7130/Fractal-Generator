import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FractalGenerator from './components/FractalGenerator';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/generate" element={<FractalGenerator />} />
      </Routes>
    </Router>
  );
};

export default App;
