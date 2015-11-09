# testing

[[gulp-mocha docs]](https://github.com/sindresorhus/gulp-mocha)

Testing is the process of checking your code for logic errors.
Including this in your build step will notify you before running your application of any logic errors you wrote.

There are lots of testers to choose from, but for this exercise we will be using `mocha`.

## Install gulp-mocha

To install the `gulp` plugin `gulp-mocha`:

```sh
$ npm install -D gulp-mocha
```

## Create a test task

```js
var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('default', ['test']);

gulp.task('test', function () {
	return gulp.src('./test/*.js', {read: false})
		.pipe(mocha())
})
```

## Run the task

```sh
$ gulp
[12:12:26] Using gulpfile ~\Dev\gulp-exercises\05-test\gulpfile.js
[12:12:26] Starting 'test'...


  calc
    √ 2+2 should equal 4
    1) 2+3 should equal 5


  1 passing (9ms)
  1 failing

  1) calc 2+3 should equal 5:

      AssertionError: 4 == 5
      + expected - actual

      -4
      +5

      at Context.<anonymous> (~\Dev\gulp-exercises\05-test\test\calc-test.js:9:10)
      at callFn (~\Dev\gulp-exercises\05-test\node_modules\gulp-mocha\node_modules\mocha\lib\runnable.js:286:21)
      at Test.Runnable.run (~\Dev\gulp-exercises\05-test\node_modules\gulp-mocha\node_modules\mocha\lib\runnable.js:279:7)
      at Runner.runTest (~\Dev\gulp-exercises\05-test\node_modules\gulp-mocha\node_modules\mocha\lib\runner.js:421:10)
      at ~\Dev\gulp-exercises\05-test\node_modules\gulp-mocha\node_modules\mocha\lib\runner.js:528:12
      at next (~\Dev\gulp-exercises\05-test\node_modules\gulp-mocha\node_modules\mocha\lib\runner.js:341:14)
      at ~\Dev\gulp-exercises\05-test\node_modules\gulp-mocha\node_modules\mocha\lib\runner.js:351:7
      at next (~\Dev\gulp-exercises\05-test\node_modules\gulp-mocha\node_modules\mocha\lib\runner.js:283:14)
      at Immediate._onImmediate (~\Dev\gulp-exercises\05-test\node_modules\gulp-mocha\node_modules\mocha\lib\runner.js:319:5)



[12:12:26] 'test' errored after 35 ms
[12:12:26] Error in plugin 'gulp-mocha'
Message:
    1 test failed.
```

## Fix test errors

Fix the test errors.

```sh
[12:00:07] Using gulpfile ~\Dev\gulp-exercises\04-lint\gulpfile.js
[12:00:07] Starting 'test'...
[12:00:07] Finished 'test' after 96 ms
[12:00:07] Starting 'default'...
[12:00:07] Finished 'default' after 11 μs
```

The build won't complete until you fix the test errors!

## Congrats!

You have successfully added testing to your `gulp` workflow!
Give yourself a pat on the back and continue to the [next exercise](../06-minify)!
