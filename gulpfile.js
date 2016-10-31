var gulp        = require('gulp');
var browserSync = require('browser-sync').create("myServer");

// 静态服务器 
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });
    browserSync.watch("app/*.html").on('change', browserSync.reload);
    browserSync.watch("app/js/*.js").on('change', browserSync.reload);
});
gulp.task('default', ["serve"],function(){
	browserSync.reload();
});