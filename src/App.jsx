import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import GeneratorSelector from './components/GeneratorSelector';
import InputField from './components/InputField';
import DownloadButton from './components/DownloadButton';
import Generator from './components/Generator';

function App() {
  const [input, setInput] = useState('');
  const [theme, setTheme] = useState('light');
  const [selectedGenerator, setSelectedGenerator] = useState('qrCode');
  const [generatedCode, setGeneratedCode] = useState('');

  const handleGenerate = () => setGeneratedCode(input);

  const handleChangeGenerator = (generator) => {
    setSelectedGenerator(generator);
    setInput('');
    setGeneratedCode('');
  };

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className={`min-vh-100 ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      <div className="text-center">
        <GeneratorSelector selected={selectedGenerator} setSelected={handleChangeGenerator} />
        <InputField input={input} setInput={setInput} theme={theme} onGenerate={handleGenerate} selectedGenerator={selectedGenerator}/>
        {generatedCode && (
          <>
            <Generator value={generatedCode} theme={theme} selected={selectedGenerator}/>
            <DownloadButton theme={theme} filename={selectedGenerator} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
