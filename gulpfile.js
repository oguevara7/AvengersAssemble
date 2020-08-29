var gulp = require('gulp');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin', function() {
  gulp.src('resources/images/*.+(png|jpg|JPG|jp2|ico)')
  .pipe(changed('build'))
  .pipe(imagemin())
  .pipe(gulp.dest('build'));
});

gulp.task('pack-js', function () {
  return gulp.src(['js/scripts.js'])
    .pipe(minify())
    .pipe(gulp.dest('js'));
});

gulp.task('pack-css', function () {
  return gulp.src(['styles/css/styles.css'])
    .pipe(cleanCss())
    .pipe(gulp.dest('styles'));
});

gulp.task('watch', function() {
  gulp.watch('js/scripts.js', gulp.series('pack-js'));
  gulp.watch('styles/css/styles.css', gulp.series('pack-css'));
});

gulp.task('default', gulp.parallel('watch', 'imagemin'));
