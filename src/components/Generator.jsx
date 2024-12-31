import React, { useEffect, useRef } from 'react';
import bwipjs from 'bwip-js';

function Generator({ value, theme, selected }) {
  const canvasRef = useRef();

  useEffect(() => {
    if (canvasRef.current) {
      try {
        bwipjs.toCanvas(canvasRef.current, {
          bcid: selected,
          text: value,
          scale: 5,
          includetext: selected==="ean13" || selected==="ean8",
          backgroundcolor: theme === 'light' ? 'F8F9FA' : '212529',
          barcolor: theme === 'light' ? '000000' : 'F8F9FA',
          textcolor: theme === 'light' ? '000000' : 'F8F9FA'
        });
      } catch (error) {
        console.error('Error generating Data Matrix code:', error);
      }
    }
  }, [value, theme]);

  return (
    <canvas id='generated-value' ref={canvasRef} className={`rounded mb-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}></canvas>
  );
}

export default Generator;
