/*
  http://gulpjs.com/plugins/
  https://www.npmjs.com/package/gulp-livereload/
  https://www.npmjs.com/package/gulp-sass/
  https://www.npmjs.com/package/gulp-babel/
  https://www.npmjs.com/package/gulp-uglify/
*/

/* Note: livereload does not work */

var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function() {
  gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(gulp.dest('./build'))
    .pipe(livereload());
})

gulp.task('sass:watch', function() {
  gulp.watch('./src/**/*.scss', ['sass']);
})

gulp.task('babel', function() {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./build'))
    .pipe(livereload());
})

gulp.task('html', function() {
  gulp
    .src('./src/*.html')
    .pipe(gulp.dest('./build'));
})

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./src/**/*.js', ['babel']);
})

gulp.task('minify-js', ['babel'], function() {
  return gulp.src('./build/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
})

gulp.task('minify-css', ['sass'], function() {
  return gulp.src('./build/**/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build'));
})

gulp.task('default', ['babel', 'sass', 'html', /*'minify-js', 'minify-css',*/ 'watch']);
