var gulp = require('gulp');
var runSequence = require('run-sequence');

var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var replace = require('gulp-replace');
var fs = require('fs');
var browserSync = require('browser-sync');

//var assets = JSON.parse(fs.readFileSync('assets.json', 'utf8'));
  // 
gulp.task('default', function() {
  return runSequence('build', 'serve', 'watch');
});

gulp.task('build', function(callback) {
  return runSequence(
    ['clean'], ['copy', 'js','js-zoomout', 'css', 'replace'], callback
  );
});

gulp.task('clean', function(callback) {
  return del(['./dist/'], callback);
});


gulp.task('copy_images', function() {
 
  return gulp.src(["./src/images/**/**.*"])
    .pipe(gulp.dest("./dist/images/"));
});

gulp.task('copy_Html', function() {
  return gulp.src(["./src/pages/**/*.html"])
    .pipe(gulp.dest("./dist/pages/"));
});

/**/
gulp.task('copy_system_js', function() {
  return gulp.src([
    "./src/js/systems/angular.js",
    "./src/js/systems/angular-route.js",
    "./src/js/systems/bootstrap.min.js",
    "./src/js/systems/jquery.min.js",
    "./src/js/systems/Chart.min.js",
    "./src/js/systems/app.js",
    "./src/js/systems/jquery.fileupload.js",
    "./src/js/systems/jquery.fileupload-process.js",
    "./src/js/systems/jquery.fileupload-image.js",
    "./src/js/systems/jquery.fileupload-validate.js",
    "./src/js/systems/jquery.fileupload-angular.js",
    "./src/js/systems/jquery.fileupload-video.js",
    "./src/js/systems/jquery.fileupload-audio.js",
    "./src/js/systems/jquery.iframe-transport.js",
    "./src/js/systems/jquery.ui.widget.js",
    "./src/js/systems/load-image.all.min.js",
    "./src/js/systems/canvas-to-blob.min.js",
    "./src/js/systems/jquery.blueimp-gallery.min.js"
  ])
    .pipe(gulp.dest('./dist/js/'));
});



gulp.task('copy_system_css', function() {
  return gulp.src([
  "./bower_components/bootstrap/dist/css/bootstrap.min.css",
  "./bower_components/bootstrap/dist/css/bootstrap-theme.min.css"
  ])
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('copy_system_fonts', function() {
  return gulp.src([
  "./bower_components/bootstrap/fonts/*.*",

  ])
    .pipe(gulp.dest('./dist/fonts/'));
});






gulp.task('copy',['copy_images','copy_Html','copy_system_css','copy_system_js','copy_system_fonts']);



gulp.task('js-zoomout', function() {
  return gulp.src(["./src/js/systems/zoomout.js"])
    .pipe(concat('zoomout.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('js', function() {
  return gulp.src(['./src/js/*.js','./src/pages/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('css', function() {
  return gulp.src([
    "./src/css/themes/theme-1.css",
    "./src/css/themes/plugins.css",
    "./src/css/themes/styles.css",
    "./src/css/main.css"
    ])
    .pipe(concat('all.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css/'));
})

gulp.task('replace', function() {
  return gulp.src(['./src/index.html'])
    .pipe(replace('@@gulp.css', '<link rel="stylesheet" href="css/all.min.css" />'))
    .pipe(replace('@@gulp.js', '<script src="js/app.js"></script>'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('serve', function() {
  return browserSync({
    server: {
      baseDir: './dist/',
      middleware: []
    },
    port: 5800
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
