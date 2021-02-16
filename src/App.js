import React, { useState, lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { Link, Router } from '@reach/router';
import SearchParams from './SearchParams';
import ThemeContext from './ThemeContext';
import NavBar from '../NavBar';

// lazy load the details component
const Details = lazy(() => import('./Details'));

const App = () => {
  const themeHook = useState('darkblue');

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar>
          <Link to="/">Adopt Me!</Link>
        </NavBar>
        <Suspense fallback={<h1>lazy loading...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};
render(<App />, document.getElementById('root'));
