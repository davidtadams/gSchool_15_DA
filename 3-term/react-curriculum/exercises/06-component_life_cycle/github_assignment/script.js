var GithubProfile = React.createClass({
  getInitialState: function() {
    return {
      data: {}
    }
  },
  componentWillMount: function(){
    $.get("http://api.github.com/users/" + this.props.children).done(function(data){
      this.setState({
        data: data
      })
    }.bind(this))
  },
  render: function() {
    return (
      <div>
        <h1>{this.state.data.login}</h1>
        <img src={this.state.data.avatar_url}/>
      </div>
    );
  }
});

React.render(<GithubProfile>octocat</GithubProfile>, document.body)