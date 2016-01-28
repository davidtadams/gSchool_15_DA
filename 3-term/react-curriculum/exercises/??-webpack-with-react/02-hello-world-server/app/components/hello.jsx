var React = require('react');

var Hello = React.createClass({
  getInitialState: function() {
    return { who: 'world' };
  },

  handleChange: function(event) {
    var nextState = { who: event.target.value };
    this.setState(nextState);
  },

  render: function() {
    var message;

    if (this.state.who.trim() === '') {
      message = 'Hello?';
    } else {
      message = 'Hello ' + this.state.who;
    }

    return <div>
      <h1>{message}</h1>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.who}
      />
    </div>;
  }
});

module.exports = Hello;
