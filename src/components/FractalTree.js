// src/components/FractalTree.js
import React, { useRef, useEffect } from 'react';

const FractalTree = ({ iterations, branchLength, branchAngle, lineWidth, fgColor, bgColor }) => {
  const canvasRef = useRef(null);

  const drawTree = (ctx, iterations, branchLength, branchAngle, lineWidth, fgColor, bgColor) => {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = fgColor;
    ctx.lineWidth = lineWidth;

    const drawBranch = (x, y, length, angle, iteration) => {
      if (iteration === 0) return;

      const xEnd = x + length * Math.cos(angle);
      const yEnd = y - length * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(xEnd, yEnd);
      ctx.stroke();

      drawBranch(xEnd, yEnd, length * 0.7, angle - branchAngle, iteration - 1);
      drawBranch(xEnd, yEnd, length * 0.7, angle + branchAngle, iteration - 1);
    };

    ctx.translate(width / 2, height);
    drawBranch(0, 0, branchLength, -Math.PI / 2, iterations);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawTree(ctx, iterations, branchLength, branchAngle, lineWidth, fgColor, bgColor);
  }, [iterations, branchLength, branchAngle, lineWidth, fgColor, bgColor]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default FractalTree;
