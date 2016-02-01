import React, {Component} from 'react'
import ResultsList from './ResultsList'
import {someAction} from '../actions/actions'
import {connect} from 'react-redux'

const ResultsPage = React.createClass({
  getInitialState() {
    return {inputText: 'No input text detected'}
  },

  render() {
    console.log('ResultsPage render() props: ', this.props)

    return (
      <div>
        <input type='text'
               placeholder='Type something!'
               onChange={(event) => this.handleChange(event.target.value)}/>
        <ResultsList inputText={this.state.inputText}/>
      </div>
    )
  },

  // Remove/replace me: this is to see a trivial full redux cycle
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(someAction())
  },

  handleChange(inputTextValue) {
    this.setState({inputText: inputTextValue})
  }
})

// Wrap the component to inject dispatch and state into it
export default connect((state) => state)(ResultsPage)