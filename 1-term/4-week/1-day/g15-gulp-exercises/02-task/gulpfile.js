var gulp = require('gulp');

gulp.task('default', ['delayed'], function () {
  console.log('running default task');
});

gulp.task('delayed', function (done) {
  setTimeout(function () {
    console.log('delayed by 2 seconds');
    done();
  }, 2000);
});
