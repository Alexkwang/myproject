var gulp = require('gulp');
var runSequence = require('run-sequence');
var argv = require('yargs').argv;
var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var replace = require('gulp-replace');
var fs = require('fs');
var browserSync = require('browser-sync');

var isDebug = !(argv.r || false);

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

/*d*/
gulp.task('copy_system_js', function() {
  return gulp.src([
    "./src/js/systems/angular.js",
    "./src/js/systems/angular-route.js",
    "./src/js/systems/bootstrap.min.js",
    "./src/js/systems/jquery.min.js",
    "./src/js/systems/Chart.min.js",
    "./src/js/systems/uploads/**/*.js",
    "./src/js/systems/ngDialog.min.js",
    "./src/js/systems/textAngular/*.js",
    "./src/js/systems/alertify.min.js",
    "./src/js/systems/ui-bootstrap-tpls.min.js",
    "./src/js/systems/angular-datatables.min.js",
    "./src/js/systems/jquery.dataTables.min.js"
    
  ])
    .pipe(gulp.dest('./dist/js/'));
});


gulp.task('copy_system_css', function() {
  return gulp.src([
  "./src/css/bootstrap/bootstrap.min.css",
  "./src/css/bootstrap/bootstrap-theme.min.css",
  "./src/css/ngdialog/ngDialog.css",
  "./src/css/ngdialog/ngDialog-theme-default.css",
  "./src/css/ngdialog/ngDialog-theme-plain.css",
  "./src/css/ngdialog/ngDialog-custom-width.css",
  "./src/css/fileupload/*.css",
  "./src/css/textAngular/*.css",
   "./src/css/alertify/*.css"
  ])
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('copy_system_fonts', function() {
  return gulp.src([
  "./bower_components/bootstrap/fonts/*.*",

  ])
    .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('copy_ace', function() {
  return gulp.src([
  "./src/assets/**/*.*",

  ])
    .pipe(gulp.dest('./dist/assets/'));
});

gulp.task('copy_favicon', function() {
  return gulp.src([
  "./src/favicon.ico",

  ])
    .pipe(gulp.dest('./dist/'));
});


gulp.task('copy',['copy_images','copy_Html','copy_system_css','copy_system_js','copy_ace','copy_favicon','copy_system_fonts']);


gulp.task('js-zoomout', function() {
  var gulpStream = gulp.src(["./src/js/systems/zoomout.js"])
    .pipe(concat('zoomout.min.js'));
    
    if(!isDebug)
    {
      gulpStream= gulpStream.pipe(uglify());
    }
    
   return gulpStream.pipe(gulp.dest('./dist/js/'));
});

gulp.task('js', function() {
 var  gulpStream= gulp.src(['./src/js/*.js','./src/js/directives/*.js','./src/pages/**/*.js','./src/indexController.js'])
    .pipe(concat('app.js'));
    
  if(!isDebug)
  {
    gulpStream=gulpStream.pipe(uglify());
  }  

   return gulpStream.pipe(gulp.dest('./dist/js/'));
});

gulp.task('css', function() {
  return gulp.src([
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
