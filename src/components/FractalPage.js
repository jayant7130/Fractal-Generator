import React, { useRef, useState, useEffect } from 'react';

const FractalPage = () => {
  const canvasRef = useRef(null);
  const [params, setParams] = useState({
    fractalType: 'tree',
    depth: 5,
    angle: 45,
    size: 100,
    branchThickness: 2,
    bgColor: '#ffffff',
    branchColor: '#000000',
  });

  const drawTreeFractal = (ctx, x, y, size, angle, depth, thickness) => {
    if (depth === 0) return;

    const x1 = x + size * Math.cos(angle);
    const y1 = y + size * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.lineWidth = thickness;
    ctx.stroke();

    drawTreeFractal(ctx, x1, y1, size * 0.7, angle - params.angle * (Math.PI / 180), depth - 1, thickness * 0.7);
    drawTreeFractal(ctx, x1, y1, size * 0.7, angle + params.angle * (Math.PI / 180), depth - 1, thickness * 0.7);
  };

  const drawFractal = (ctx) => {
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.fillStyle = params.bgColor;
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.strokeStyle = params.branchColor;

    if (params.fractalType === 'tree') {
      drawTreeFractal(ctx, canvasRef.current.width / 2, canvasRef.current.height, params.size, -Math.PI / 2, params.depth, params.branchThickness);
    }
    // You can add more fractal types here.
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth * 0.7;
    canvas.height = window.innerHeight;

    drawFractal(ctx);
  }, [params]);

  const handleInputChange = (e) => {
    setParams({
      ...params,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 0.7 }}>
        <canvas ref={canvasRef} />
      </div>
      <div style={{ flex: 0.3, padding: '20px', background: '#f0f0f0' }}>
        <h2>Fractal Generator</h2>
        <label>
          Fractal Type:
          <select name="fractalType" value={params.fractalType} onChange={handleInputChange}>
            <option value="tree">Tree</option>
            {/* Add more fractal types as options */}
          </select>
        </label>
        <br />
        <label>
          Depth:
          <input
            type="number"
            name="depth"
            value={params.depth}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Angle:
          <input
            type="number"
            name="angle"
            value={params.angle}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Size:
          <input
            type="number"
            name="size"
            value={params.size}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Branch Thickness:
          <input
            type="number"
            name="branchThickness"
            value={params.branchThickness}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Background Color:
          <input
            type="color"
            name="bgColor"
            value={params.bgColor}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Branch Color:
          <input
            type="color"
            name="branchColor"
            value={params.branchColor}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
};

export default FractalPage;
