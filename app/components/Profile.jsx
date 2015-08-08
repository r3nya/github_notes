import React, { Component } from 'react';
import Router from 'react-router';

export default class Profile extends Component {
  constructor () {
    super();
    this.state = {
      notes : [],
      bio   : {},
      repos : []
    };
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-4">
          User Profile Component
        </div>
        <div className="col-md-4">
          Repos
        </div>
        <div className="col-md-4">
          Notes
        </div>
      </div>
    );
  }
}
