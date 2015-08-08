import React from 'react';
import Router from 'react-router';

let routes = require('./config/routes.jsx');

Router.run(routes, (Root) => {
  React.render(<Root />, document.getElementById('app'));
});
