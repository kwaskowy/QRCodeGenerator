import React from 'react';

function DownloadButton({ theme }) {
  function handleDownload() {
    const svg = document.getElementById('qr-code-value');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const svgData = new XMLSerializer().serializeToString(svg);

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
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
    <div className='mt-5'>
    <button onClick={handleDownload} className={`btn ${theme === 'light' ? 'btn-success' : 'btn-danger'}`}>
      Pobierz jako PNG
    </button>
    </div>
  );
}

export default DownloadButton;
