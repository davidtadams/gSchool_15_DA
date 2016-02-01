# React.js with Redux

## Basic Agenda

1. Downsides of react managing state
    - View layer is no longer just a view layer
    - Complicated state model
    - Mutation of state can happen anywhere!
1. Overview of redux
    1. Pure functions
    1. Single store
    1. Components
    1. Actions
    1. Reducers
1. Convert our app from react state to redux state

## Installation

1. `npm install -g jspm`
1. `jspm install`

## Dev workflow

1. `npm install -g jspm-server`
    - You will have CORS problems if you skip this step
    - Any server works - e.g. `python -m SimpleHTTPServer`
1. `jspm-server`

## Production workflow

1. `jspm bundle main --inject`
1. Check out 'Developer Console' > 'Network' - your `config.js` will now load `bundle.js` instead of each file