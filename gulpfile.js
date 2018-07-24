const gulp = require('gulp');
const sass = require('gulp-sass');

//tasks sass
gulp.task('sass', function(){

    gulp.src('scss/projeto.scss')
    	.pipe(sass({outputStyle:'compressed'})).on('error', sass.logError)
        .pipe(gulp.dest('css/projeto.css'))

    gulp.src('scss/viewUser.scss')
    	.pipe(sass({outputStyle:'compressed'})).on('error', sass.logError)
        .pipe(gulp.dest('css/viewUser.css'))
});

//watch the sass
gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
