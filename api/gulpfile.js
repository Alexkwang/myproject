/**
 * Created by alex wang on 7/6/2015.
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var notify = require('gulp-notify');
var argv = require('yargs').argv;
var replace = require('gulp-replace');
var nodemon = require('gulp-nodemon');

/**
 * Clean dist folder
 */
gulp.task('clean', function (cb) {
   return del(['dist/**/*.js', 'dist/**/*.json'], cb)
});

/**
 * compile coffee script
 */
gulp.task('js', ['clean'], function () {
    var env = argv.e || "GDEV";
    return gulp.src('./src/**/*.js')
      .pipe(replace("[replace_env]", env))
      .pipe(gulp.dest('./dist/'))
      .pipe(notify({ message: "Compiler js complete." }));
});

/**
 * copy some project file
 */
gulp.task('copy', ['clean'], function () {
    return gulp.src(['./src/log4js_configuration.json'])
      .pipe(gulp.dest('./dist/'))
      .pipe(notify({ message: "Copy file complete." }));
});


gulp.task('copylog', ['clean'], function () {
    return gulp.src(['./src/logs/*.*'])
      .pipe(gulp.dest('./dist/logs'))
      .pipe(notify({ message: "created logs folder complete." }));
});

/**
 * prepare task before start program
 */
gulp.task('build', ['clean', 'js', 'copy','copylog']);

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