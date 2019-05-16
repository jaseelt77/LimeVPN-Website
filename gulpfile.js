const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// compile scss into css
 function style() {
     // where is my my scss file
     return gulp.src('./scss/**/*.scss')
     //2. pass that file through sass compiler
     .pipe(sass())
     
    // 3). where do i save the compiled css
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
 }
 function watch(){
     browserSync.init({
         server:{
             baseDir: './'
         }
     });
     gulp.watch('./scss/**/*.scss',style);
     gulp.watch('./*.html').on('change', browserSync.reload);
     gulp.watch('./js/**/*.js').on('change', browserSync.reload);
 }

  



 
 exports.style = style;
 exports.watch = watch;