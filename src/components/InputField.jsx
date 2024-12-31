import React from 'react';

function InputField({ input, setInput, theme, onGenerate, selectedGenerator }) {
    if (selectedGenerator==='ean13'){
        return (
            <div className="mb-4 text-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Wprowadź tekst"
                className={`form-control w-25 mx-auto mb-3 ${theme === 'light' ? 'bg-white text-dark' : 'bg-secondary text-light'}`}
                maxLength={13}
              />
              <button
                disabled={!input.trim()}
                onClick={onGenerate}
                className={`btn me-2 ${theme === 'light' ? 'btn-primary' : 'btn-warning'}`}
              >
                Generuj
              </button>
            </div>
          );
    } else if (selectedGenerator==='ean8'){
        return (
            <div className="mb-4 text-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Wprowadź tekst"
                className={`form-control w-25 mx-auto mb-3 ${theme === 'light' ? 'bg-white text-dark' : 'bg-secondary text-light'}`}
                maxLength={8}
              />
              <button
                disabled={!input.trim()}
                onClick={onGenerate}
                className={`btn me-2 ${theme === 'light' ? 'btn-primary' : 'btn-warning'}`}
              >
                Generuj
              </button>
            </div>
          );
    } else {
        return (
            <div className="mb-4 text-center">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Wprowadź tekst"
                className={`form-control w-25 mx-auto mb-3 ${theme === 'light' ? 'bg-white text-dark' : 'bg-secondary text-light'}`}
              />
              <button
                disabled={!input.trim()}
                onClick={onGenerate}
                className={`btn me-2 ${theme === 'light' ? 'btn-primary' : 'btn-warning'}`}
              >
                Generuj
              </button>
            </div>
          );
    }

}

export default InputField;
