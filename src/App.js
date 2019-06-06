import React from 'react';
import { Route, } from 'react-router-dom';
import Game from './components/Game';

const App = () => (
  <Route exact path="/" component={Game} />
);

export default App;
