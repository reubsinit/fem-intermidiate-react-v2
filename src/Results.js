import React from 'react';
import Pet from './Pet';

export default function Results({ pets }) {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets Found!</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.type}
            name={pet.name}
            key={pet.id}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            id={pet.id}
          ></Pet>
        ))
      )}
    </div>
  );
}
