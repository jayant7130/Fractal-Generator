// src/components/FractalGenerator.js
import React, { useState } from 'react';
import DragonCurve from './DragonCurve';
import FractalTree from './FractalTree';
import '../styles/FractalGenerator.css';

const FractalGenerator = () => {
  const [selectedFractal, setSelectedFractal] = useState('dragonCurve');
  const [iterations, setIterations] = useState(10);
  const [lineWidth, setLineWidth] = useState(2);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [foregroundColor, setForegroundColor] = useState('#000000');
  const [direction, setDirection] = useState('right');
  const [branchLength, setBranchLength] = useState(100);
  const [branchAngle, setBranchAngle] = useState(Math.PI / 6);

  const renderFractal = () => {
    switch (selectedFractal) {
      case 'dragonCurve':
        return (
          <DragonCurve
            iterations={iterations}
            lineWidth={lineWidth}
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            direction={direction}
          />
        );
      case 'fractalTree':
        return (
          <FractalTree
            iterations={iterations}
            branchLength={branchLength}
            branchAngle={branchAngle}
            lineWidth={lineWidth}
            foregroundColor={foregroundColor}
            backgroundColor={backgroundColor}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fractal-container">
      <div className="canvas-wrapper">
        <div className="canvas">
          {renderFractal()}
        </div>
      </div>
      <div className="controls">
        <h3>Fractal Parameters</h3>

        <label>
          Select Fractal:
          <select
            value={selectedFractal}
            onChange={(e) => setSelectedFractal(e.target.value)}
          >
            <option value="dragonCurve">Dragon Curve</option>
            <option value="fractalTree">Fractal Tree</option>
          </select>
        </label>

        <label>
          Iterations:
          <input
            type="number"
            value={iterations}
            onChange={(e) => setIterations(Number(e.target.value))}
          />
        </label>

        <label>
          Line Width:
          <input
            type="number"
            value={lineWidth}
            onChange={(e) => setLineWidth(Number(e.target.value))}
          />
        </label>

        <label>
          Background Color:
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </label>

        <label>
          Foreground Color:
          <input
            type="color"
            value={foregroundColor}
            onChange={(e) => setForegroundColor(e.target.value)}
          />
        </label>

        {selectedFractal === 'fractalTree' && (
          <>
            <label>
              Branch Length:
              <input
                type="number"
                value={branchLength}
                onChange={(e) => setBranchLength(Number(e.target.value))}
              />
            </label>

            <label>
              Branch Angle (in radians):
              <input
                type="number"
                step="0.01"
                value={branchAngle}
                onChange={(e) => setBranchAngle(Number(e.target.value))}
              />
            </label>
          </>
        )}

        <label>
          Direction:
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default FractalGenerator;
