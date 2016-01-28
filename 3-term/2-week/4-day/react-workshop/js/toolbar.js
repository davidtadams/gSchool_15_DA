var MultiSelectButton = React.createClass({
  selected: function (message) { return message.selected; },

  render: function () {
    var selectedClassName;
    if(this.props.messages.every(this.selected)) {
      selectedClassName = "fa fa-check-square-o";
    } else if (this.props.messages.some(this.selected)) {
      selectedClassName = "fa fa-minus-square-o";
    } else {
      selectedClassName = "fa fa-square-o";
    }

    return (
      <button className="btn btn-default" onClick={this.props.didChangeSelection}>
        <i className={selectedClassName}></i>
      </button>
    )
  }

});

var EnabledButton = React.createClass({
  render: function () {
    return (
      <button className="btn btn-default" disabled={!this.props.enabled} onClick={this.props.onClick}>
        {this.props.text || this.props.children}
      </button>
    )
  }
});

var LabelSelect = React.createClass({
  handleChange: function (e) {
    this.props.onChange(e.target.value);
    e.target.selectedIndex = 0;
  },

  render: function () {
    return (
      <select ref={this.props.ref} className="form-control label-select" disabled={!this.props.enabled} onChange={this.handleChange}>
        <option>{this.props.text}</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
      </select>
    )
  }
});

var Toolbar = React.createClass({
  selected: function (message) { return message.selected; },

  didChangeSelection: function () {
    if(this.props.messages.every(this.selected)) {
      this.props.didUnselectAllMessages();
    } else {
      this.props.didSelectAllMessages();
    }
  },

  render: function () {
    var unreadMessageCount = this.props.messages.filter(function (message) {
      return !message.read;
    }).length;

    var someSelected = this.props.messages.some(this.selected);

    return (
      <div className="row toolbar">
        <div className="col-md-8">
          <MultiSelectButton  messages={this.props.messages}
                              didChangeSelection={this.didChangeSelection} />

          <EnabledButton  text="Mark as Read"
                          enabled={someSelected}
                          onClick={this.props.markAsRead} />

          <EnabledButton  text="Mark as Unread"
                          enabled={someSelected}
                          onClick={this.props.markAsUnread} />

          <LabelSelect  text="Apply Label"
                        enabled={someSelected}
                        ref="applyLabel"
                        onChange={this.props.applyLabel} />

          <LabelSelect  text="Remove Label"
                        enabled={someSelected}
                        ref="removeLabel"
                        onChange={this.props.removeLabel} />

          <EnabledButton  enabled={someSelected} onClick={this.props.deleteMessages}>
            <i className="fa fa-trash-o"></i>
          </EnabledButton>
        </div>
        <div className="col-md-4">
          <p className="text-right">
            <span className="badge">{unreadMessageCount}</span> unread messages
          </p>
        </div>
      </div>
    )
  }
});
