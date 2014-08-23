/** @jsx React.DOM */

'use strict';

var React = require('react'),

  GithubProfile = React.createClass({
    getInitialState: function () {
      return {user: 'granze'};
    },
    render: function () {
      return (
        <div className="container">{this.state.user}</div>
      );
    }
  });

module.exports = GithubProfile;
