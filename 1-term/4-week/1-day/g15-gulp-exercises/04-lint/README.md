# Linting

[[gulp-eslint docs]](https://github.com/adametry/gulp-eslint)

Linting is the process of checking your code for style errors and syntax errors.
Including this in your build step will notify you before running your application of any quick errors you wrote.

There are lots of linters to choose from, but for this exercise we will be using `eslint`.

## Install gulp-eslint

To install the `gulp` plugin `gulp-eslint`:

```sh
$ npm install -D gulp-eslint
```

## Create a lint task

```js
var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('default', ['lint']);

gulp.task('lint', function () {
	return gulp.src('./src/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
})
```

Notice we return the result of the `gulp` chain in the `lint` task.
Also, we are running the `lint` task from `default`.

## Run the task

```sh
$ gulp
[11:55:10] Using gulpfile ~\Dev\gulp-exercises\04-lint\gulpfile.js
[11:55:10] Starting 'lint'...
[11:55:11]
~\Dev\gulp-exercises\04-lint\src\app.js
  2:17  error  Parsing error: Unexpected identifier

~\Dev\gulp-exercises\04-lint\src\components\list.js
  1:28  error  Parsing error: Unexpected token {

✖ 2 problems (2 errors, 0 warnings)

[11:55:11] 'lint' errored after 94 ms
[11:55:11] ESLintError in plugin 'gulp-eslint'
Message:
    Failed with 2 errors
```

## Fix linting errors

Fix the linting errors.

```sh
[12:00:07] Using gulpfile ~\Dev\gulp-exercises\04-lint\gulpfile.js
[12:00:07] Starting 'lint'...
[12:00:07] Finished 'lint' after 96 ms
[12:00:07] Starting 'default'...
[12:00:07] Finished 'default' after 11 μs
```

The build won't complete until you fix the linting errors!

## Congrats!

You have successfully added linting to your `gulp` workflow!
Give yourself a pat on the back and continue to the [next exercise](../05-test)!
