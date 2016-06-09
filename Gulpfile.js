var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function(){
    gulp.src('css/style.sass')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./css/dist'));
})

//watch task
gulp.task('default', function(){
    gulp.watch('css/**/*.sass',['styles'])
})

