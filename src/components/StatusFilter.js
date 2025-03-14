'use client';

import React from 'react';

function StatusFilter({ status, onStatusChange }) {
  return (
    <div className="mb-6">
      <p className="block text-sm font-medium mb-2">
        Filter by status:
      </p>
      <select
        id="status-filter"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="w-64 p-2 border border-white"
      >
        <option value="">None</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}

export default StatusFilter; 