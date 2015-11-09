var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eslint = require('gulp-eslint');

gulp.task('default', ['lint', 'test'], function () {
	return gulp
		.src('./src/**/*.js')
		.pipe(gulp.dest('./build'))
});

gulp.task('lint', function () {
	return gulp.src('./src/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
})

gulp.task('test', function () {
	return gulp.src('./test/*.js', {read: false})
		.pipe(mocha())
})

gulp.task('watch', function () {
	gulp.watch('./src/**/*.js', ['default']);
	gulp.watch('./test/*.js', ['test']);
})
