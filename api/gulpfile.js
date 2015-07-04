/**
 * Created by alex on 7/2/2015.
 */

var gulp = require('gulp');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var del = require('del');
var notify = require('gulp-notify');
var argv = require('yargs').argv;
var replace = require('gulp-replace');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglify');
var runSequence = require('run-sequence');
/**
 * Clean dist folder
 */
gulp.task('clean', function (cb) {
    del(['dist/**/*.js', 'dist/**/*.json'], cb)
});

/**
 * compile js script
 */
gulp.task('Js', function () {
    var env = argv.e || "GDEV";
    return gulp.src('./src/**/*.js')
      .pipe(replace("[replace_env]", env))
      .pipe(gulp.dest('./dist/'))
      .pipe(notify({ message: "Compiler js complete." }));

});

/**
 * copy some project file
 */
gulp.task('copy', function () {
    return gulp.src(['./src/log4js_configuration.json'])
      .pipe(gulp.dest('./dist/'))
      .pipe(notify({ message: "Copy loger file complete." }));
});

/**
 * prepare task before start program
 */
gulp.task('build', function(callback) {
  return runSequence(['clean'],[ 'Js', 'copy'], callback);
});

/**
 * start server
 */
var nodemon_instance;

gulp.task('serve', function () {
    if (!nodemon_instance) {
        nodemon_instance = nodemon(
          {
              script: 'dist/index.js',
              ext: 'html'
          })
          .on('restart', function () {
              console.log("restart server......................")
          });
    } else {
        nodemon_instance.emit("restart");
    }
});

gulp.task('serve_watch', ['serve'], function () {
    return gulp.watch('src/**/*', ['restart']);
});

/**
 * default task
 */
gulp.task('default', ['build'], function () {
    gulp.start('serve_watch');
});

gulp.task('restart', ['build'], function () {
    gulp.start('serve');
});