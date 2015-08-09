import React, { Component } from 'react';
import Router from 'react-router';

let Repos = require('./github/Repos.jsx');
let UserProfile = require('./github/UserProfile.jsx');
let Notes = require('./notes/Notes.jsx');

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
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    );
  }
}
