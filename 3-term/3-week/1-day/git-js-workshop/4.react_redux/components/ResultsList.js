import React, {Component} from 'react'
import franc from 'franc'

const ResultsList = React.createClass({
  whitelist: ['spa', 'por', 'fra', 'eng', 'rus', 'swe', 'afr', 'fin', 'dan', 'deu', 'nld'],

  render() {
    const inputText = this.props.inputText
    const results = franc.all(inputText, {'whitelist': this.whitelist})

    return (
      <div>
        <div>Input was: {inputText}</div>
        <div>{this.resultsList(results)}</div>
      </div>
    )
  },

  resultsList(results) {
    return results.map(function(result, index) {
      return (
        <div key={index}>{result[0]} - {result[1]}</div>
      )
    })
  }
})

export default ResultsList