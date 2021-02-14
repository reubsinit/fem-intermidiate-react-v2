import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';

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
  const [breed, BreedDropdown, setBreed] = useDropdown(
    'Breed',
    '',
    breeds
  );
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    setPets(animals || []);
  }

  // Once rendering has finished, the function passed to
  // useEffect will run once and then again for every time
  // any of the dependencies are change - see the array parameter
  useEffect(() => {
    setBreeds([]);
    setBreed('');
    pet.breeds(animal).then(({ breeds }) => {
      const breedNames = breeds.map(({ name }) => name);
      setBreeds(breedNames);
    }, console.error);
    // TODO: Look into why setBreed and setBreeds are required as
    // dependencies here
  }, [animal, setBreed, setBreeds]);

  // When the component has mounted, the render will happen first
  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets();
        }}
      >
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
      <Results pets={pets} />
    </div>
  );
}
