const Pet = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Big Dog'),
    React.createElement('h2', {}, 'Dog'),
    React.createElement('h2', {}, 'American Staffy'),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
