import React, { Component } from 'react';

export default class UserProfile extends Component {
  render () {
    return (
      <div>
        UserProfile {this.props.username}
      </div>
    )
  }
}
