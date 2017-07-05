var gulp = require('gulp');
const jshint = require('gulp-jshint');

gulp.task('default', function() {
});

gulp.task('lint', function() {
  return gulp.src('./index.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});
