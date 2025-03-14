'use client';

import React from 'react';

function SpeciesFilter({ species, onSpeciesChange }) {
  return (
    <div className="mb-6">
      <p className="block text-sm font-medium mb-2">
        Filter by species:
      </p>
      <input
        type="text"
        id="species-filter"
        value={species}
        onChange={(e) => onSpeciesChange(e.target.value)}
        placeholder="Enter species..."
        className="w-64 p-2 border border-white"
      />
    </div>
  );
}

export default SpeciesFilter; 