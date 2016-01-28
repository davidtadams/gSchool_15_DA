var MessageList = React.createClass({
  render: function () {
    var messageComponents = this.props.messages.map(function (message) {
      return (
        <Message key={message.id}
          onClick={this.props.onMessageClick}
          message={message}
          onMessageSelectionChange={this.props.onMessageSelectionChange}
          onMessageStarChange={this.props.onMessageStarChange} />
      )
    }.bind(this));

    return (
      <div>{messageComponents}</div>
    )
  }
});

var Inbox = React.createClass({

  getInitialState: function() {
    return {messages: []};
  },

  componentDidMount: function() {
    $.getJSON("api/inbox.json").then(function (response) {
      this.setState({messages: response.messages});
    }.bind(this));
  },

  didSelectAllMessages: function () {
    this.state.messages.forEach(function (message) {
      message.selected = true;
    });
    this.setState({messages: this.state.messages});
  },

  didUnselectAllMessages: function () {
    this.state.messages.forEach(function (message) {
      message.selected = false;
    });
    this.setState({messages: this.state.messages});
  },

  didChangeMessageSelection: function (message) {
    message.selected = !message.selected;
    this.setState({messages: this.state.messages});
  },

  didChangeMessageStar: function (message) {
    message.starred = !message.starred;
    this.setState({messages: this.state.messages});
  },

  markAsRead: function () {
    this.state.messages.forEach(function (message) {
      if(message.selected) {
        message.read = true;
      };
    });
    this.setState({messages: this.state.messages});
  },

  markAsUnread: function () {
    this.state.messages.forEach(function (message) {
      if(message.selected) {
        message.read = false;
      };
    });
    this.setState({messages: this.state.messages});
  },

  applyLabel: function (label) {
    this.state.messages.forEach(function (message) {
      if(message.selected) {
        if(message.labels.indexOf(label) < 0) {
          message.labels.push(label);
        }
      };
    });
    this.setState({messages: this.state.messages});
  },

  removeLabel: function (label) {
    this.state.messages.forEach(function (message) {
      if(message.selected) {
        var labelIndex = message.labels.indexOf(label);
        if(labelIndex >= 0) {
          message.labels.splice(labelIndex, 1);
        }
      };
    });
    this.setState({messages: this.state.messages});
  },

  deleteMessages: function () {
    this.setState({
      messages: this.state.messages.filter(function(message){
        return !message.selected;
      })
    });
  },

  onMessageClick: function (message) {
    this.setState({selectedMessage: message});
  },

  closeMessage: function (e) {
    this.setState({selectedMessage: null});
  },

  render: function() {
    if (this.state.selectedMessage) {
      return (
        <div className="container">
          You are viewing the message "{this.state.selectedMessage.subject}"
          <i className="fa fa-close" onClick={this.closeMessage}></i>
        </div>
      )
    } else {
      return (
        <div className="container">

          <Toolbar didSelectAllMessages={this.didSelectAllMessages}
            didUnselectAllMessages={this.didUnselectAllMessages}
            markAsRead={this.markAsRead}
            markAsUnread={this.markAsUnread}
            applyLabel={this.applyLabel}
            deleteMessages={this.deleteMessages}
            removeLabel={this.removeLabel}
            messages={this.state.messages} />

          <MessageList messages={this.state.messages}
            onMessageClick={this.onMessageClick}
            onMessageSelectionChange={this.didChangeMessageSelection}
            onMessageStarChange={this.didChangeMessageStar} />

        </div>
      );
    }
  }
});

React.render(<Inbox />, document.getElementById('placeholder'));
