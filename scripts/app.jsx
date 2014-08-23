/** @jsx React.DOM */

'use strict';

window.React = require('react');

var GithubProfile = require('./components/github-profile.jsx');

window.React.renderComponent(<GithubProfile />, document.body);
