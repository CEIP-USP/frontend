import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PreRegistration from './pages/PreRegistration';
import Search from './pages/Search';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Login from './pages/Login';
import ManageProfile from './pages/ManageProfile';

export default function Routes() {
  return (
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={PreRegistration} path="/pre-registration" />
      <Route component={Profile} path="/profile" exact />
      <Route component={EditProfile} path="/profile/edit" />
      <Route component={Login} path="/login" />
      <Route component={Search} path="/search" />
      <Route component={ManageProfile} path="/profile/:id" />
    </Switch>
  );
}
