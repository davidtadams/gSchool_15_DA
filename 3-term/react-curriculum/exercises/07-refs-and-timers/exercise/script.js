var App = React.createClass({
  getInitialState: function(){
    return {
      val: "",
      checkboxVal: false,
      radioVal: false
    }
  },
  update: function(text,checkboxVal,radioVal){
    this.setState({
      val: text,
      checkboxVal: checkboxVal,
      radioVal: radioVal
    })
  },
  renderNiceHeader: function(){
    return (
      <div>
        <Header>Yeah!</Header>
        <h1>Form Values</h1>
        <ul>
          <li>Input: {this.state.val}</li>
          <li>Checkbox: {this.state.checkboxVal.toString()}</li>
          <li>Radio: {this.state.radioVal.toString()}</li>
        </ul>
        <Form onCustomSubmit={this.update}/>
      </div>
      )
  },
  renderMeanHeader: function(){
    return (
      <div>
        <Header>Boo!</Header>
        <h1>Form Values</h1>
        <ul>
          <li>Input: {this.state.val}</li>
          <li>Checkbox: {this.state.checkboxVal.toString()}</li>
          <li>Radio: {this.state.radioVal.toString()}</li>
        </ul>
        <Form onCustomSubmit={this.update}/>
      </div>
      )
  },
  render: function() {
    if(this.state.checkboxVal){
      return this.renderNiceHeader()
    } else {
      return this.renderMeanHeader()
    }
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <h1>{this.props.children}</h1>
    );
  }
});

var Form = React.createClass({
  captureValue: function(e){
    e.preventDefault();
    var inputText = React.findDOMNode(this.refs.text).value
    var checkboxValue = React.findDOMNode(this.refs.checkbox).checked
    var radioValue = React.findDOMNode(this.refs.radio).checked
    this.props.onCustomSubmit(inputText,checkboxValue,radioValue)
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.captureValue}>
          <input type="text" ref="text"/>
          <input type="checkbox" ref="checkbox" />
          <input type="radio" ref="radio" />
          <input type="submit" value="Change things!" />
        </form>
      </div>
    );
  }
});

React.render(<App/>,document.body)