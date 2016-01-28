var SelectButton = React.createClass({
  handleClick: function (e) {
    e.stopPropagation();
    this.props.didChange(this.props.message);
  },

  render: function () {
    return (
      <input type="checkbox" checked={this.props.message.selected} onClick={this.handleClick} />
    )
  }
});

var StarButton = React.createClass({
  handleChange: function (e) {
    e.stopPropagation();
    this.props.didChange(this.props.message);
  },

  render: function () {
    var classNames = "star fa";
    if(this.props.message.starred) {
      classNames += " fa-star";
    } else {
      classNames += " fa-star-o";
    }
    return (
      <i className={classNames} onClick={this.handleChange}></i>
    )
  }
});

var Message = React.createClass({
  didChangeSelection: function (message) {
    this.props.onMessageSelectionChange(message);
  },

  didChangeStar: function (message) {
    this.props.onMessageStarChange(message);
  },

  classNames: function () {
    var classes = ["row", "message"];
    classes.push(this.props.message.read ? "read" : "unread");
    if (this.props.message.selected) classes.push("selected");
    return classes.join(' ');
  },

  labelNodes: function () {
    return this.props.message.labels.slice(0).sort().map(function (label) {
      return <span className="label label-warning">{label}</span>
    });
  },

  handleClick: function () {
    this.props.onClick(this.props.message);
  },

  render: function () {
    return (
      <div className={this.classNames()} onClick={this.handleClick}>
        <div className="col-md-1">
          <div className="row">
            <div className="col-md-2">
              <SelectButton message={this.props.message} didChange={this.didChangeSelection} />
            </div>
            <div className="col-md-2">
              <StarButton message={this.props.message} didChange={this.didChangeStar} />
            </div>
          </div>
        </div>
        <div className="col-md-11">
          {this.labelNodes()}
          {this.props.message.subject}
        </div>
      </div>
    )
  }
});
