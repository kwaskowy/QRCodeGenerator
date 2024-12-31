import React from 'react';

function GeneratorSelector({ selected, setSelected }) {
  return (
    <div className="btn-group btn-group-toggle btn-group-lg mb-4" data-toggle="buttons">
      {['qrCode', 'ean13', 'ean8'].map((type) => (
        <label
          key={type}
          className={`btn btn-secondary ${selected === type ? 'active' : ''}`}
          onClick={() => setSelected(type)}
        >
          <input type="radio" name="options" autoComplete="off" style={{ display: 'none' }} />
          {type.toUpperCase()}
        </label>
      ))}
    </div>
  );
}

export default GeneratorSelector;
