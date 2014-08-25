/** @jsx React.DOM */

'use strict';

var React = require('react'),
    xhr = require('superagent'),

    GithubProfile = React.createClass({
      getInitialState: function() {
        return {user: 'granze'};
      },
      componentDidMount: function() {
        var url = 'https://api.github.com/users/';
        xhr
          .get(url + this.state.user)
          .end(function(res) {
            console.log(res.body);
            if (this.isMounted()) {
              this.setState({
                name: res.body.name,
                user : res.body.login,
                avatar: res.body.avatar_url,
                url: res.body.html_url,
                repos: res.body.public_repos,
                gists: res.body.public_gists
              });
            }
          }.bind(this));
      },
      render: function() {
        return (
          <div className="github-profile">
            <h1><a href={this.state.url}><span className="name">{this.state.name}</span>({this.state.user})</a></h1>
            <img className="avatar" src={this.state.avatar} />
            <ul className="infos">
              <li><strong>Repos:</strong> {this.state.repos}</li>
              <li><strong>Gists:</strong> {this.state.gists}</li>
            </ul>
          </div>
        );
      }
    });

module.exports = GithubProfile;
