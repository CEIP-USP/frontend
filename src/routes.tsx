import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PreRegistration from './pages/PreRegistration/PreRegistration';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={PreRegistration} path="/pre-registration" />
      </Switch>
    </BrowserRouter>
  );
}
