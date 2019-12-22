/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Tijuana from '../../containers/Tijuana';
import HomePage from '../../containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
console.log('mr app');
export default function App() {
  console.log('I am very happy to see you mr app');
  debugger;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={Tijuana} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
