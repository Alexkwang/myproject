var gulp = require('gulp'),
  runSequence = require('run-sequence');

var del = require('del'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin'),
  replace = require('gulp-replace'),
  browserSync = require('browser-sync')
  // 
gulp.task('default', function() {
  return runSequence('build', 'serve', 'watch');
});

gulp.task('build', function(callback) {
  return runSequence(
    ['clean'], ['copy', 'js', 'css', 'replace'], callback
  );
});

gulp.task('clean', function(callback) {
  return del(['./dist/'], callback);
});

gulp.task('copy',['copy_images','copy_Html','copy_system_js']);
gulp.task('copy_images', function() {
  return gulp.src(['./src/images/**/**.*'])
    .pipe(gulp.dest('./dist/images/'));
});

gulp.task('copy_Html', function() {
  return gulp.src(['./src/pages/**/**.html'])
    .pipe(gulp.dest('./dist/pages/'));
});




gulp.task('copy_system_js', function() {
  return gulp.src(['./src/js/**/**.*'])
    .pipe(gulp.dest('./dist/js/'));
});




gulp.task('js', function() {
  return gulp.src(['./src/js/*.js'])
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('css', function() {
  return gulp.src(['./src/css/normalize*.css', './src/css/**/*.css'])
    .pipe(concat('all.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css/'));
})

gulp.task('replace', function() {
  return gulp.src(['./src/index.html'])
    .pipe(replace('@@gulp.css', '<link rel="stylesheet" href="css/all.min.css" />'))
    .pipe(replace('@@gulp.js', '<script src="js/all.min.js"></script>'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('serve', function() {
  return browserSync({
    server: {
      baseDir: './dist/',
      middleware: []
    },
    port: 5000
  })
});

gulp.task('watch', function() {
  return gulp.watch(['./src/**/*.*'], {
    debounceDelay: 2000
  }, ['reload-all']);
});

gulp.task('reload-all', function() {
  return runSequence('build', function() {
    browserSync.reload();
  });
});