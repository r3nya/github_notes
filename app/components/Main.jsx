import React, { Component } from 'react';
import { RouteHandler } from 'react-router';

export default class Main extends Component {
  render () {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            Menu
          </div>
        </nav>
        <div className="container">
          <RouteHandler />
        </div>
      </div>
    );
  }
}
