import React from 'react';
import Barcode from 'react-barcode';

function BarcodeGenerator({ value, format, theme }) {
  return (
    <div className={`rounded d-inline-block mb-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
      <Barcode
        value={value}
        format={format.toUpperCase()}
        width={2}
        height={100}
        displayValue={true}
        background={theme === 'light' ? '#F8F9FA' : '#212529'}
        lineColor={theme === 'light' ? '#212529' : '#F8F9FA'}
      />
    </div>
  );
}

export default BarcodeGenerator;
