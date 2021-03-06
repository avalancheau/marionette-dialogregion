var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    gutil = require('gulp-util');

gulp.task('default', function() {
  gulp.src('src/coffee/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./dist/'))
});
