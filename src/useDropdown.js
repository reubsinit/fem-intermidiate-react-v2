import React, { useState } from 'react';

export default function useDropdown(label, defaultState, options) {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onChange={(event) => setState(event.target.value)}
        onBlur={(event) => setState(event.target.value)}
        disabled={!options.length}
      >
        <option>All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
}
