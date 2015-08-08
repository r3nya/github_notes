import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
let Main = require('../components/Main.jsx');
let Home = require('../components/Home.jsx');
let Profile = require('../components/Profile.jsx');

module.exports = (
  <Route name='app' path='/' handler={Main}>
    <Route name='profile' path='profile/:username' handler={Profile} />
    <DefaultRoute handler={Home} />
  </Route>
);
