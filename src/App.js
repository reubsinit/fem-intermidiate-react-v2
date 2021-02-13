import React from 'react';
import { render } from 'react-dom';

const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Big Dog',
      animal: 'Dog',
      breed: 'American Staffy',
    }),
    React.createElement(Pet, {
      name: 'Miso',
      animal: 'Dog',
      breed: 'Long Haired Chihauhau',
    }),
    React.createElement(Pet, {
      name: 'Kim Chi',
      animal: 'Cat',
      breed: 'All Sorts!',
    }),
  ]);
};
render(React.createElement(App), document.getElementById('root'));
