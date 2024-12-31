import React, { useEffect, useRef } from 'react';
import bwipjs from 'bwip-js';

function AztecCodeGenerator({ value, theme }) {
  const canvasRef = useRef();

  useEffect(() => {
    if (canvasRef.current) {
      try {
        bwipjs.toCanvas(canvasRef.current, {
          bcid: 'azteccode', // Barcode type
          text: value, // Text to encode
          scale: 3, // Scaling factor
          includetext: false, // No text below barcode
          backgroundcolor: theme === 'light' ? 'FFFFFF' : '212529',
          barcolor: theme === 'light' ? '000000' : 'F8F9FA',
        });
      } catch (error) {
        console.error('Error generating Aztec code:', error);
      }
    }
  }, [value, theme]);

  return (
    <canvas ref={canvasRef} className={`rounded mb-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}></canvas>
  );
}

export default AztecCodeGenerator;
