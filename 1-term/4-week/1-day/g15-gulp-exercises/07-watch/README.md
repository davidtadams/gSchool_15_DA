# watch

[[gulp.watch docs]](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulpwatchglob--opts-tasks-or-gulpwatchglob--opts-cb)

Watching means you want something to happen each time a file is changed.
This is useful for building!
Say you want to lint, test, and copy your files and update the build automatically on save.
Watch allows us to do this.

## Install dependencies

```sh
$ npm install
```

## Create a watch task

```js
gulp.task('watch', ['default'], function () {
	gulp.watch('./src/**/*.js', ['default']);
	gulp.watch('./test/*.js', ['test']);
})
```

## Run the task

```sh
$ gulp watch
[12:40:50] Using gulpfile ~\Dev\gulp-exercises\07-watch\gulpfile.js
[12:40:50] Starting 'watch'...
[12:40:50] Finished 'watch' after 11 ms
[12:40:59] Starting 'lint'...
[12:40:59] Starting 'test'...
...
```

The watch task runs continuously until you hit `ctrl+c`.
The point of watch is it will now automatically run your build steps when it detects files have changed.
When there are no errors, it gets through and actually produces the built application.

## Congrats!

Give yourself a pat on the back and use `gulp` in your personal projects!
