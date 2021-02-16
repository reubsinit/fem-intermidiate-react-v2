import React, { useState } from 'react';
import { render } from 'react-dom';
import { Link, Router } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from './ThemeContext';
import NavBar from '../NavBar';

const App = () => {
  const themeHook = useState('darkblue');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <NavBar>
            <Link to="/">Adopt Me!</Link>
          </NavBar>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById('root'));
