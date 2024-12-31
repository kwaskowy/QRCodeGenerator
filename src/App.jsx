import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import GeneratorSelector from './components/GeneratorSelector';
import InputField from './components/InputField';
import QRCodeGenerator from './components/QRCodeGenerator';
import BarcodeGenerator from './components/BarcodeGenerator';
import DownloadButton from './components/DownloadButton';

function App() {
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState('light');
  const [selectedGenerator, setSelectedGenerator] = useState('qrCode');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerate = () => setGeneratedCode(input);
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className={`min-vh-100 ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <div className="text-center">
        <GeneratorSelector selected={selectedGenerator} setSelected={setSelectedGenerator} />
        <InputField input={input} setInput={setInput} theme={theme} onGenerate={handleGenerate} />
        {generatedCode && (
          <>
            {selectedGenerator === 'qrCode' ? (
              <QRCodeGenerator value={generatedCode} theme={theme} />
            ) : (
              <BarcodeGenerator value={generatedCode} format={selectedGenerator} theme={theme} />
            )}
            <DownloadButton theme={theme} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
