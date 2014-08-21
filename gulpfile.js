var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

var paths = {
    less: './less/',
    css: './css/',
};

gulp.task('less', function() {
    gulp.src(paths.less + 'lt-main.less')
        .pipe(less())
        .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function() {
    gulp.watch(paths.less + '**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);
