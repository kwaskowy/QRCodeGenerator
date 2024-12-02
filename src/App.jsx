import { useState } from 'react';
import './App.css';
import React from "react";
import QRCode from "react-qr-code";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');

  function handleGenerateQrCode() {
    setQrCode(input);
  }

  function handleDownloadQrCode() {
    const svg = document.getElementById('qr-code-value');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const svgData = new XMLSerializer().serializeToString(svg);

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'qr-code.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    img.src = url;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Generator kodów QR</h1>
      <div className="mb-4 text-center">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Wprowadź tekst"
          className="form-control w-50 mx-auto mb-3"
        />
        <button
          disabled={!input.trim()}
          onClick={handleGenerateQrCode}
          className="btn btn-primary me-2"
        >
          Generuj
        </button>
      </div>
      <div className="text-center">
        {qrCode && (
          <div>
            <div className="p-4 bg-light border rounded d-inline-block mb-3">
              <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
            </div>
            <br />
            <button onClick={handleDownloadQrCode} className="btn btn-success">
              Pobierz jako PNG
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
