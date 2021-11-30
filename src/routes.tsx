import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PreRegistration from './pages/PreRegistration/PreRegistration';
import Search from './pages/Search';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

export default function Routes() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Search} path="/search" />
      <Route component={PreRegistration} path="/pre-registration" />
      <Route component={Profile} path="/profile" exact />
      <Route component={EditProfile} path="/profile/edit" />
    </Switch>
  );
}
