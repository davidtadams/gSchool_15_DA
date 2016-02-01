# Javascript Tooling and Ecmascript 6

## Basic Agenda

1. Quick overview of ES6 vs ES5
1. Look at ES6 features
    - `import` and `export`
    - `const` and `let`
    - `for..of` and interpolation
    - Splat operator
    - Arrow operator
    - Destructuring
1. Chat about JS tooling
1. Look at [jspm](http://jspm.io/) + [systemjs](https://github.com/systemjs/systemjs)

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