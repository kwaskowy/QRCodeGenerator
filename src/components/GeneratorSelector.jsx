import React from 'react';

function GeneratorSelector({ selected, setSelected }) {
  const generators = [
    { id: 'qrCode', label: 'QR' },
    { id: 'aztec', label: 'Aztec' },
    { id: 'dataMatrix', label: 'Data Matrix' },
  ];

  return (
    <div className="btn-group btn-group-toggle btn-group-lg mb-4" data-toggle="buttons">
      {generators.map((generator) => (
        <label
          key={generator.id}
          className={`btn btn-secondary ${selected === generator.id ? 'active' : ''}`}
          onClick={() => setSelected(generator.id)}
        >
          <input type="radio" name="options" autoComplete="off" style={{ display: 'none' }} />
          {generator.label}
        </label>
      ))}
    </div>
  );
}

export default GeneratorSelector;
