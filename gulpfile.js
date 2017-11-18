var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify'),
    uglifyjs = require('uglify-js');

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

// delete dist folder
gulp.task('clean', function (){
    return del('dist/');
});

// example
gulp.task('default', function(done) {
  console.log('Tarefa padrao');
  done();
})
