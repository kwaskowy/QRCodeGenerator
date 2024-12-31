import React from 'react';
import QRCode from 'react-qr-code';

function QRCodeGenerator({ value, theme }) {
  return (
    <div className={`rounded d-inline-block mb-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
      <QRCode
        id="qr-code-value"
        value={value}
        size={200}
        fgColor={theme === 'light' ? '#212529' : '#F8F9FA'}
        bgColor={theme === 'light' ? '#F8F9FA' : '#212529'}
      />
    </div>
  );
}

export default QRCodeGenerator;
