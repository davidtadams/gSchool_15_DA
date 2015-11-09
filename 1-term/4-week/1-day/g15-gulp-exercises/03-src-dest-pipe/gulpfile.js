var gulp = require('gulp');

gulp.task('default', function () {
  gulp
      .src('./src/**/*.js')
      .pipe(gulp.dest('./build'))
});
