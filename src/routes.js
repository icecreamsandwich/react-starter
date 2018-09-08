import React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import Home from './components/home';
import About from './components/about';
import Lorem from './components/lorem';
import PageNotFound from './components/common/PageNotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/home" component={Home}/>
    <Route path="/lorem" component={Lorem}/>
    <Route component={PageNotFound} />
  </Switch>
);