# Run

[[gulp docs]](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

## Install Gulp

To begin, open a terminal in this folder.

Install `gulp` globally so you can run it from the terminal:

```sh
$ npm install -g gulp
```

*Try `sudo` if you get a permission error.*

Now install `gulp` locally for your project:

```sh
$ npm install -D gulp
```

**For each project, you will have to install `gulp` locally.**
Meaning that for each one of these exercises, you will have to install `gulp` locally.

## Create a gulpfile.js

```sh
$ touch gulpfile.js
```

Add this text to your `gulpfile.js`:

```js
var gulp = require('gulp');

gulp.task('default');
```

## Run gulp

```sh
$ gulp
[11:07:18] Using gulpfile ~/Dev/gulp-exercises/01-run/gulpfile.js
[11:07:18] Starting 'default'...
[11:07:18] Finished 'default' after 54 μs
```

## Congrats!

You have successfully installed and configured `gulp`!
Give yourself a pat on the back and continue to the [next exercise](../02-task)!
