# Webpack with React

In this chapter, you'll learn what Webpack with React is, why it's important, and how to use it. By the end, you'll have used it to build professional React applications.

| Duration by yourself | Duration as a class |
|----------------------|---------------------|
| TBD                  | TBD                 |

## What's Webpack with React?

[Webpack](http://webpack.github.io/) solves the fundamental problem of web development, namely module bundling. Webpack collects and processes a variety of web assets and packs them into a bundle that you can serve to your client. Even though this sounds simple, it is in fact a difficult problem that becomes more complex as your web application grows.

[Webpack](http://webpack.github.io/) is a module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.

![What is webpack](https://webpack.github.io/assets/what-is-webpack.png)

## Why is Webpack with React important?

- Code splitting and using CommonJS require statements
- Hot Module Reloading
- Sourcemaps

## How do you use Webpack with React?

`mkdir hello-world`

`cd hello-world`

`npm init`

`package.json`
```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

```
npm install --save react react-dom
```

```
npm install --save-dev babel-core babel-loader babel-preset-react webpack
```

`package.json`
```json
{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack --watch"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^0.14.2",
    "react-dom": "^0.14.2"
  },
  "devDependencies": {
    "babel-core": "^6.1.21",
    "babel-loader": "^6.2.0",
    "babel-preset-react": "^6.1.18",
    "webpack": "^1.12.6"
  }
}
```

`.gitignore`
```
build
node_modules
npm-debug.log
```

```sh
touch index.html
```

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="hello"></div>
    <script src="build/bundle.js"></script>
  </body>
</html>
```

`webpack.config.js`
```js
module.exports = {
  entry: './app/entry.jsx',
  output: {
    filename: './build/bundle.js'
  },
  module: {
    loaders: [{
      include: /app/,
      loader: 'babel',
      test: /\.jsx$/
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
```

`.babelrc`
```
{
  "presets": ["react"]
}
```

```sh
mkdir -p app/components
touch app/entry.jsx
touch app/components/hello.jsx
```

`app/entry.jsx`
```
var Hello = require('./components/hello');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <Hello />,
  document.getElementById('hello')
);
```

`app/components/hello.jsx`
```jsx
var React = require('react');

var Hello = React.createClass({
  getInitialState: function() {
    return { who: 'world' };
  },

  handleChange: function(event) {
    var nextState = { who: event.target.value };
    this.setState(nextState);
  },

  render: function() {
    var message;

    if (this.state.who.trim() === '') {
      message = 'Hello?';
    } else {
      message = 'Hello ' + this.state.who;
    }

    return <div>
      <h1>{message}</h1>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.who}
      />
    </div>;
  }
});

module.exports = Hello;
```

## Assignment

Replace the CDNs in your **sportball team** assignment using Webpack with React.

## References

* [Webpack docs - What is webpack?](http://webpack.github.io/docs/what-is-webpack.html)
