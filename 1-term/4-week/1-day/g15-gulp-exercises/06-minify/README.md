# minify

[[gulp-uglify docs]](https://github.com/terinjokes/gulp-uglify)

Minifying is the process of making your code smaller.
Including this in your build step will make your resulting code smaller and unreadable.

There are lots of minifiers to choose from, but for this exercise we will be using `uglify`.

## Install gulp-uglify

To install the `gulp` plugin `gulp-uglify`:

```sh
$ npm install -D gulp-uglify
```

## Create a minify task

```js
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', ['minify']);

gulp.task('minify', function () {
	return gulp.src('./src/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./build'))
})
```

## Run the task

```sh
$ gulp
[12:21:36] Using gulpfile ~\Dev\gulp-exercises\06-minify\gulpfile.js
[12:21:36] Starting 'minify'...
[12:21:36] Finished 'minify' after 55 ms
[12:21:36] Starting 'default'...
[12:21:36] Finished 'default' after 12 μs
```

If you look in the `./build` folder you'll notice the code looks different now.
It is all smushed into a single line and some variable names have changed!

## Congrats!

You have successfully added minifying to your `gulp` workflow!
Give yourself a pat on the back and continue to the [next exercise](../07-watch)!
