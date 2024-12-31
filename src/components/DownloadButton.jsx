import React from 'react';

function DownloadButton({ theme, filename }) {
  function handleDownload() {
    const canvas = document.getElementById('generated-value');

    const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${filename}.png`; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
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
