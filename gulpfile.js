'use strict';

var gulp = require('gulp'),
    pug = require('gulp-pug');
    
    // Jade
    gulp.task('pug', function(){
      gulp.src('app/pug/*.pug')
      .pipe(pug({
        pretty: true
      }))
        .pipe(gulp.dest('app'))
    });
    
    //Watch
    gulp.task('watch', function(){
     gulp.watch('app/pug/*.pug', ['pug']);
    });


    gulp.task('default',['pug','watch']);