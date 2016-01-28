var MovieSearchForm = React.createClass({
  getDefaultProps: function(){
    return {
      url: "http://omdbapi.com?t="
    }
  },
  getInitialState: function(){
    return {
      data: {}
    }
  },
  movieSearch: function(e){
    e.preventDefault();
    $.get(this.props.url + React.findDOMNode(this.refs.search).value).done(function(data){
      this.setState({
        data: data,
      })
    }.bind(this))
    React.findDOMNode(this.refs.search).value = "";
    React.findDOMNode(this.refs.search).focus();
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.movieSearch}>
          <input ref="search" type="text" autoFocus/> &nbsp;
          <input type="submit" value="Search"/>
        </form>
        <Movie data={this.state.data}/>
      </div>
    );
  }
});

var Movie = React.createClass({
  render: function() {
    return (
      <div>
      <p>
        {this.props.data.Title} {this.props.data.Year}
      </p>
        <img src={this.props.data.Poster}/>
      </div>
    );
  }
});

React.render(<MovieSearchForm/>, document.body);