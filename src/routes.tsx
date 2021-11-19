import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PreRegistration from './pages/PreRegistration/PreRegistration';
import Search from './pages/Search';
import Home from './pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Search} path="/search" />
      <Route component={PreRegistration} path="/pre-registration" />
    </Switch>
  );
}
