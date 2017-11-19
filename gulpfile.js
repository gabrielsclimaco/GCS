var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify'),
    webpack = require('webpack-stream'),
    runSequence = require('run-sequence');

const del = require('del');

// minify-sass
gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss')
               .pipe(sass().on('error', sass.logError))
               .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('app/scss/*.scss', ['sass']);
});

// minify-index
gulp.task('minify-index', function() {
  return gulp.src('app/*.js')
            .pipe(minify({
                ext:{
                    src:'-debug.js',
                    min:'.js'
                }
            }))
            .pipe(gulp.dest('dist/'));
});

// minify-socket
gulp.task('minify-socket', function() {
  return gulp.src('app/js/*.js')
            .pipe(minify({
                ext:{
                    src:'-debug.js',
                    min:'.js'
                }
            }))
            .pipe(gulp.dest('dist/'));
});

//  uglify socket
gulp.task('uglify-socket', () => {
  return gulp.src('app/js/*.js')
         .pipe(concat('socket.min.js'))
         .pipe(uglify())
         .pipe(gulp.dest('dist/'))
});

// delete dist folder
gulp.task('clean', function (){
    return del('dist/');
});

// example
gulp.task('default', function(done) {
  console.log('Tarefa padrao');
  done();
});

// webpack
gulp.task('webpack', function() {
  return gulp.src('dist/index.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/'));
});

// run sequence
gulp.task('build', function (callback) {
  runSequence('clean',
              'sass');
});
