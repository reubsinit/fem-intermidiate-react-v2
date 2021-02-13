import React, { useState } from 'react';

export default function SearchParams() {
  // useState returns the reference to the value we want to track
  // and a reference to the function used to update that value
  const [location, setLocation] = useState('Seattle, WA');

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
