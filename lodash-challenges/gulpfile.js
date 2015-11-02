var gulp  = require('gulp'),
    mocha = require('gulp-mocha'),
    lint  = require('gulp-eslint');

gulp.task('default', ['lint', 'test'], function() {
});

gulp.task('lint', function() {
  return gulp.src(['lodash.js', 'test/*.js'])
    .pipe(lint())
    .pipe(lint.format())
    .pipe(lint.failAfterError());
});

gulp.task('test', function() {
  return gulp.src('test/*.js')
    .pipe(mocha({reporter: 'list'}));
});
