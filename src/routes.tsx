import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PreRegistration from './pages/PreRegistration/PreRegistration';
import Search from './pages/Search';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Login from './pages/login/Login';
import { RestrictedPage } from './pages/restricted/Restricted';

export default function Routes() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={PreRegistration} path="/pre-registration" />
      <Route component={Profile} path="/profile" exact />
      <Route component={EditProfile} path="/profile/edit" />
      <Route component={Login} path="/login" />
      <Route component={RestrictedPage} path="/restricted" />
      <Route component={Search} path="/search" />
    </Switch>
  );
}
