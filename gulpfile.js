var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var webserver = require('gulp-webserver');

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

gulp.task('connect-dev', function() {
    return gulp.src('build')
        .pipe(webserver({
            root: ['.'],
            livereload: true
        }));
});

gulp.task('connect-prod', function() {
    return gulp.src('build')
        .pipe(webserver({
            port: 80,
            fallback: 'index.html'
        }));
});

gulp.task('default', ['less', 'watch']);
