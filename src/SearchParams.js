import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

export default function SearchParams() {
  // useState returns the reference to the value we want to track
  // and a reference to the function used to update that value
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown(
    'Animal',
    'dog',
    ANIMALS
  );
  const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

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
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
    </div>
  );
}
