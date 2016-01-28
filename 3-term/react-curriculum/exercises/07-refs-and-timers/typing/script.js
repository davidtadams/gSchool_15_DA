var App = React.createClass({
  getInitialState: function(){
    return {
      text: ""
    }
  },
  changeText: function(e){
    this.setState({
      text: e.target.value
    })
  },
  clearText: function(e){
    this.setState({
      text: ""
    })
    // USING REFS!
      // you may see a method called
    React.findDOMNode(this.refs.textInput).value = "";
    React.findDOMNode(this.refs.textInput).focus();
  },
  render: function() {
    return (
      <div>
        <h1>{this.props.children}</h1>
        <h1>{this.state.text}</h1>
        <input ref="textInput" id="typing" type="text" onKeyUp={this.changeText} autoFocus/>
        <button onClick={this.clearText}>Clear Text</button>

      </div>
    );
  }
});

React.render(<App>Type in here!</App>, document.body)