var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var minify = require('gulp-minify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  gulp.start('watch');
});

gulp.task('clean:dist',function(){
  return del.sync('dist');
});

gulp.task('sass', function(){
  return gulp.src('sass/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compressed',
  }).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('lint', function(){
  return gulp.src(['scripts/*.js','gulpfile.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('images', function(){
  return gulp.src('images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'));
});

gulp.task('compress', function(){
  return gulp.src('scripts/*.js')
  .pipe(minify())
  .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch', function(){
  gulp.watch('sass/*.scss',['sass']);
  gulp.watch('scripts/*.js', ['lint']);
  gulp.watch('gulpfile.js', ['lint']);
  gulp.watch('scripts/*.js', ['compress']);
  gulp.watch('images/*.+(png|jpg|gif|svg)', ['images']);
});
