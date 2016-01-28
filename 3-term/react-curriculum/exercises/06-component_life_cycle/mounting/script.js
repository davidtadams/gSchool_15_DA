var App = React.createClass({
  getInitialState: function() {
    return {
      txt: ""
    };
  },
  componentDidMount: function(){
    React.findDOMNode(this.refs.nameInput).focus();
  },
  update: function(e){
    this.setState({txt: e.target.value})
  },
  render:function(){
    return (
      <div>
        <input name="one" ref="nameInput" onChange={this.update} />
        <h1>{this.state.txt}</h1>
      </div>
      );
  }
});

React.render(<App/>, document.body);

