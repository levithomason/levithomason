var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var webserver = require('gulp-webserver');

var paths = {
    less: 'app/less/',
    css: 'app/css/',
};

gulp.task('less', function() {
    gulp.src(paths.less + 'lt-main.less')
        .pipe(less())
        .pipe(gulp.dest(paths.css));
});

gulp.task('watch', function() {
    gulp.watch(paths.less + '**/*.less', ['less']);
});

gulp.task('serve', function() {
    gulp.src('app')
        .pipe(webserver({
            root: ['.'],
            port: 80,
            livereload: true,
            fallback: 'index.html'
        }));
});

gulp.task('default', ['less', 'watch']);
