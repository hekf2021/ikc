var gulp        = require('gulp');
var browserSync = require('browser-sync').create("myServer");

// 静态服务器 
gulp.task('serve', function() {

    browserSync.init({
        server: "./app"
    });
    browserSync.watch("app/*.html").on('change', browserSync.reload);
});
gulp.task('default', ["serve"]);