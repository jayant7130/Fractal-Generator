// src/components/DragonCurve.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles/FractalGenerator.css';

const DragonCurve = ({ iterations, lineWidth, backgroundColor, foregroundColor, direction }) => {
  const canvasRef = useRef(null);

  const drawDragonCurve = (ctx, iterations, lineWidth, fgColor, bgColor, direction) => {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    const padding = 331; // Default padding value

    ctx.clearRect(0, 0, width, height); // Clear the canvas
    ctx.fillStyle = bgColor; // Set background color
    ctx.fillRect(0, 0, width, height); // Fill the background
    ctx.lineWidth = lineWidth; // Set line width
    ctx.strokeStyle = fgColor; // Set the curve color

    // Generate Dragon Curve Sequence
    let curve = [0];
    for (let i = 0; i < iterations; i++) {
      const newCurve = [...curve, 1, ...curve.map((v) => -v).reverse()];
      curve = newCurve;
    }

    // Calculate the step size based on available canvas size, considering padding
    const step = Math.min(
      (width - 2 * padding) / (Math.pow(2, iterations / 2)),
      (height - 2 * padding) / (Math.pow(2, iterations / 2))
    );

    // Start from the center of the canvas
    let x = width / 2;
    let y = height / 2;
    let angle = direction === 'right' ? 0 : Math.PI; // Handle direction

    // Calculate the bounding box of the entire fractal
    let minX = x, minY = y, maxX = x, maxY = y;

    // First pass: determine bounding box
    let tempX = x, tempY = y;
    for (let turn of curve) {
      angle += turn * Math.PI / 2;
      tempX += Math.cos(angle) * step;
      tempY += Math.sin(angle) * step;
      minX = Math.min(minX, tempX);
      minY = Math.min(minY, tempY);
      maxX = Math.max(maxX, tempX);
      maxY = Math.max(maxY, tempY);
    }

    // Calculate offset to center the fractal
    const offsetX = (width - (maxX - minX)) / 2 - minX;
    const offsetY = (height - (maxY - minY)) / 2 - minY;

    // Start actual drawing
    x += offsetX;
    y += offsetY;
    ctx.beginPath();
    ctx.moveTo(x, y);

    // Second pass: draw the curve with the computed offset
    for (let turn of curve) {
      angle += turn * Math.PI / 2;
      x += Math.cos(angle) * step;
      y += Math.sin(angle) * step;
      ctx.lineTo(x, y);
    }

    ctx.stroke();
  };

  // Redraw the curve whenever parameters change
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawDragonCurve(ctx, iterations, lineWidth, foregroundColor, backgroundColor, direction);
  }, [iterations, lineWidth, backgroundColor, foregroundColor, direction]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} width={800} height={800}></canvas>
    </div>
  );
};

export default DragonCurve;
