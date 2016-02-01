# React.js

## Basic Agenda

1. Quick overview of React.js
1. Build out our previous example (franc.js language checker)
1. In the process, look into
    1. `render()`
    1. Composition of components
    1. Events
    1. `componentDidMount()`
    1. `this.props`

## Installation

1. Install [nodejs](https://nodejs.org/en/) (it comes with an older version of `npm`)
1. Upgrade your version of npm: `npm install -g npm@3.6.0`
    - `npm -v` to check
1. `npm install -g jspm`
1. `git clone https://github.com/jadekler/git-js-workshop.git ~/git-js-workshop`
1. `cd ~/git-js-workshop/3.react`
1. `jspm install`

## Dev workflow

1. `npm install -g jspm-server`
    - You will have CORS problems if you skip this step
    - Any server works - e.g. `python -m SimpleHTTPServer`
1. `jspm-server`

## Production workflow

1. `jspm bundle main --inject`
1. Check out 'Developer Console' > 'Network' - your `config.js` will now load `bundle.js` instead of each file