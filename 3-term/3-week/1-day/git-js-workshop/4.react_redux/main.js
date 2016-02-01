import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from 'reducers/rootReducer'
import ResultsPage from 'components/ResultsPage'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <ResultsPage />
  </Provider>,
  document.getElementById('content')
)