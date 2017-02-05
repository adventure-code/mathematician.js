(function() {

  var gulp = require('gulp');
  var uglify = require('gulp-uglify');
  var concat = require('gulp-concat');

  gulp.task('build', function() {
    gulp.src('src/**/*.js')
      .pipe(concat('mathematician.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
  });

}());
