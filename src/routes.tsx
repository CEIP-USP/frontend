import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PreRegistration from './pages/PreRegistration/PreRegistration';
import Home from './pages/Home';
import Login from './pages/login/Login';
import { RestrictedPage } from './pages/restricted/Restricted';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={PreRegistration} path="/pre-registration" />
        <Route component={Login} path="/login"></Route>
        <Route component={RestrictedPage} path="/restricted"></Route>
      </Switch>
    </BrowserRouter>
  );
}
