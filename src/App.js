import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from './components/Game';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import NoMatch from './components/NoMatch';


const App = () => (
  <Fragment>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/game" component={Game} />
    <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;
