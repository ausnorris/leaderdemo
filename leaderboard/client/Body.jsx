var React = require('react');
var Leaderboard = require('./Leaderboard.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <div className="app">
        <div className="outer">
          <div className="logo"></div>
          <h1 className="title">Favourite Australian Made Military Rifle Poll</h1>
          <div className="subtitle">Select a rifle to give points</div>
          <Leaderboard />
        </div>
      </div>
    );
  }
});

module.exports = Body;
