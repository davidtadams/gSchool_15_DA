var App = React.createClass({
  getInitialState: function() {
    return {
      red: 128,
      green: 128,
      blue: 128,
    };
  },
  update: function(e){
    this.setState({
      // we have to add the refs.inp to reference the div
      // using getDOMNode only works for one
      
      red: React.findDOMNode(this.refs.red.refs.input).value,
      green: React.findDOMNode(this.refs.green.refs.input).value,
      blue: React.findDOMNode(this.refs.blue.refs.input).value
    })
  },
  render:function(){
    var colorStyle = {
      backgroundColor:"rgb(" + this.state.red + "," + this.state.green + "," + this.state.blue + ")",

    }
    return (
      <div style={{textAlign: "center"}}> {this.props.txt}
        <div > R: {this.state.red} G: {this.state.green} B: {this.state.blue}
          <div style={colorStyle}>
            <Slider ref="red" update={this.update} />
            <Slider ref="green" update={this.update}/>
            <Slider ref="blue" update={this.update}/>
          </div>
        </div>
      </div>
      );
  }
});

var Slider = React.createClass({
  render: function() {
    return (
      <div>
        <input ref="input" type="range" min="0" max="255" onChange={this.props.update} />
      </div>
    );
  }
});

React.render(<App txt="My First Color Slider!"/>, document.body);

