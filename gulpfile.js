const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Compile Sass & Inject into Browser

gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest("src/css"))
  .pipe(browserSync.stream());
});

// Move JS Files to src/js

gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 
    'node_modules/jquery/dist/jquery.min.js'])
  .pipe(gulp.dest("src/js"))
  .pipe(browserSync.stream());
});

// Watch Sass & Server

gulp.task('serve',['sass'], function() {


  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
  gulp.watch("src/*.html").on('change');
});

// Move Fonts Folder to src

gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest("src/fonts"));
});

// Move Font Awesome CSS to src/css

gulp.task('fa', function() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
  .pipe(gulp.dest("src/css"));
});

gulp.task('default', ['js', 'serve', 'fonts', 'fa']);












