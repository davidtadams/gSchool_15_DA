# gulp.src gulp.dest & gulp.pipe

[[gulp docs]](https://github.com/gulpjs/gulp/blob/master/docs/API.md#gulp-api-docs)

`gulp.src` is used to tell `gulp` which files you want to use in this task.
`gulp.dest` is used to tell `gulp` where to put the resulting files.
`gulp.pipe` is used to move files through a transformation.

## Copy js files from ./src to ./build

In the `./src` folder are some `.js` files that are part of our application.
We want to read the file, and write it to a `./build` folder.
We can do that with this task:

```js
gulp.task('default', function () {
	gulp
		.src('./src/**/*.js')
		.pipe(gulp.dest('./build'))
})
```

Run gulp:

```sh
$ gulp
[11:39:19] Using gulpfile ~\Dev\gulp-exercises\03-src-dest-pipe\gulpfile.js
[11:39:19] Starting 'default'...
[11:39:19] Finished 'default' after 7.1 ms
```

A `./build` folder should have been created.

## src

First we used `.src`.
Why did we use `/**/*`?
This is a glob file.
`**` specifies it will grab all folders.
`*.js` specifies in all those folders, it will grab anything that ends in `.js`.
That means all of our JavaScript files!

## piping

Next we used `.pipe`. This gives us a chance to run our files through any transformation function we want.
This will become very relevant in the next exercises! Trust me!

## dest

Next we pipe the files into `gulp.dest`.
This writes out the files in the state they ended up in.
In this case, we didn't do any transformations, so it will essentially be a file copy.

## Congrats!

You have successfully sourced, piped, and written files in `gulp`!
Give yourself a pat on the back and continue to the [next exercise](../04-lint)!
