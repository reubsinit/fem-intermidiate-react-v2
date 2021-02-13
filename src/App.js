import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Big Dog" animal="Dog" breed="American Staffy" />
      <Pet
        name="Miso Paste"
        animal="Dog"
        breed="Long Haired Chihauhau"
      />
      <Pet name="Kim Chi" animal="Cat" breed="All Sorts!" />
    </div>
  );
};
render(<App />, document.getElementById('root'));
