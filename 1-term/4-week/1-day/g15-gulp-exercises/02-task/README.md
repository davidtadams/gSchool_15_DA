# Tasks

[[gulp docs]](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulptaskname-deps-fn)

## Install Gulp

This section is a reminder to install `gulp` locally.
Later exercises will not include this step, but it is still required.

Install `gulp` locally:

```sh
$ npm install -D gulp
```

## Default Task

Open up `gulpfile.js` and check out the `gulp.task` defined.
It is the `default` task.
When you run `gulp` it will automatically run the `default` task.

Let's extend what the `default` task does:

```js
gulp.task('default', function () {
	console.log('running default task')
});
```

Now it runs `console.log` whenever the `default` task is run.
Any JavaScript is allowed to go here though.
Any build task you might have can be automated with JavaScript and run by Gulp!

## Asynchronous Task

Let's create a second task named `delayed` that runs asynchronously in gulp:

```js
gulp.task('delayed', function (done) {
	setTimeout(function () {
		console.log('Delayed by 2 seconds');
		done();
	}, 2000);
});
```

You can run the task by running `gulp delayed` in your terminal.

```sh
$ gulp delayed
[11:20:03] Using gulpfile ~\Dev\gulp-exercises\02-task\gulpfile.js
[11:20:03] Starting 'delayed'...
Delayed by 2 seconds
[11:20:05] Finished 'delayed' after 2 s
```

Notice we are passing `done` into the function.
This allows us to tell `gulp` when the asynchronous task is done.
Otherwise, `gulp` will continue before it prints `Delayed by 2 seconds`.
You can test this out by removing `done` from the task.

```js
gulp.task('delayed', function () {
	setTimeout(function () {
		console.log('Delayed by 2 seconds');
	}, 2000);
});
```

What happens when you run it now?
Make sure you add `done` back before continuing.

## Task Dependencies

Let's say in your `default` task you wanted to run `delayed` first.
This can be easily accomplished by adding a second argument to `gulp.task`.
The second argument accepts an array of the names of the other tasks you want to run first before running the task you are defining.

```js
gulp.task('default', ['delayed'], function () {
	console.log('running default task');
});
```

Now when you run `gulp` and the `default` task is run, it will run `delayed` before `default`.

```sh
$ gulp
[11:24:49] Using gulpfile ~\Dev\gulp-exercises\02-task\gulpfile.js
[11:24:49] Starting 'delayed'...
Delayed by 2 seconds
[11:24:51] Finished 'delayed' after 2 s
[11:24:51] Starting 'default'...
running default task
[11:24:51] Finished 'default' after 396 μs
```

## Congrats!

You have successfully created and configured tasks in `gulp`!
Give yourself a pat on the back and continue to the [next exercise](../03-src-dest-pipe)!
