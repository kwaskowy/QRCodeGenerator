import React, { useState } from 'react';
import './App.css';
import QRCode from "react-qr-code";
import Barcode from "react-barcode";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState('light');
  const [selectedGenerator, setSelectedGenerator] = useState("qrCode");

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

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <div className={`min-vh-100 ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
        <div className="text-start mb-4">
          <button onClick={toggleTheme} className='theme-switch btn'>
          {theme=== 'light' ? <BsFillMoonStarsFill/> : <BsSun color='white'/>}
          </button>
        </div>
      <div className="text-center">
      <div className="btn-group btn-group-toggle btn-group-lg mb-4" data-toggle="buttons">
      <label
        className={`btn btn-secondary ${selectedGenerator === "qrCode" ? "active" : ""}`}
        onClick={() => setSelectedGenerator("qrCode")}
      >
        <input
          type="radio"
          name="options"
          id="option1"
          autoComplete="off"
          checked={selectedGenerator === "qrCode"}
          onChange={() => setSelectedGenerator("qrCode")}
          style={{ display: "none" }}
        />
        QR
      </label>
      <label
        className={`btn btn-secondary ${selectedGenerator === "ean13" ? "active" : ""}`}
        onClick={() => setSelectedGenerator("ean13")}
      >
        <input
          type="radio"
          name="options"
          id="option2"
          autoComplete="off"
          checked={selectedGenerator === "ean13"}
          onChange={() => setSelectedGenerator("ean13")}
          style={{ display: "none" }}
        />
        EAN13
      </label>
      <label
        className={`btn btn-secondary ${selectedGenerator === "ean8" ? "active" : ""}`}
        onClick={() => setSelectedGenerator("ean8")}
      >
        <input
          type="radio"
          name="options"
          id="option3"
          autoComplete="off"
          checked={selectedGenerator === "ean8"}
          onChange={() => setSelectedGenerator("ean8")}
          style={{ display: "none" }}
        />
        EAN8
      </label>
    </div>
        <div className="mb-4 text-center">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            placeholder="Wprowadź tekst"
            className={`form-control w-25 mx-auto mb-3 ${theme === 'light' ? 'bg-white text-dark' : 'bg-secondary text-light'}`}
          />
          <button
            disabled={!input.trim()}
            onClick={handleGenerateQrCode}
            className={`btn me-2 ${theme === 'light' ? 'btn-primary' : 'btn-warning' }`}
          >
            Generuj
          </button>
        </div>
        <div className="text-center">
  {qrCode && (
    <div>
      <div className={`rounded d-inline-block mb-3 ${theme === 'light' ? 'bg-white' : 'bg-dark'}`}>
            {selectedGenerator === "qrCode" ? (
        <QRCode
          id="qr-code-value"
          value={qrCode}
          size={400}
          fgColor={`${theme === 'light' ? '#212529' : '#F8F9FA'}`}
          bgColor={`${theme === 'light' ? '#F8F9FA ' : '#212529'}`}
        />
      ) : selectedGenerator === "ean13" ? (
        <Barcode
          value={qrCode}
          format="EAN13"
          width={2}
          height={100}
          displayValue={true}
          background={`${theme === 'light' ? '#F8F9FA' : '#212529'}`}
          lineColor={`${theme === 'light' ? '#212529' : '#F8F9FA'}`}
        />
      ) : selectedGenerator === "ean8" ? (
        <Barcode
          value={qrCode}
          format="EAN8"
          width={2}
          height={100}
          displayValue={true}
          background={`${theme === 'light' ? '#F8F9FA' : '#212529'}`}
          lineColor={`${theme === 'light' ? '#212529' : '#F8F9FA'}`}
        />
      ) : null} 
      </div>
      <br />
      <button
        onClick={handleDownloadQrCode}
        className={`${theme === 'light' ? 'btn btn-success' : 'btn btn-danger'}`}
      >
        Pobierz jako PNG
      </button>
    </div>
  )}
</div>
      </div>
    </div>
  );
}

export default App;
