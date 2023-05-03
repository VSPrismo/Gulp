const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', function() {
  return gulp.src('src/img/**/*.{jpg,jpeg,png,gif}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('uglify', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', gulp.series('sass', 'imagemin', 'uglify'));
