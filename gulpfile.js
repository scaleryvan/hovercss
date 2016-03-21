'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
 
gulp.task('sass', function () {
    var processors = [
        autoprefixer,
        cssnano
      ];
    gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:"expanded"}).on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
gulp.task('default', function(){
    gulp.run('sass', 'sass:watch');
});