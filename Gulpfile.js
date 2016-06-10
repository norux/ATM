var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function(){
    gulp.src('app/css/style.sass')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./app/css/dist'));
})

//watch task
gulp.task('default', function(){
    gulp.watch('app/css/**/*.sass',['styles'])
})

