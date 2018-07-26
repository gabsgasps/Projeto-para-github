const gulp = require('gulp');
const sass = require('gulp-sass');

//tasks sass
gulp.task('sass', function(){

    gulp.src('scss/projeto.scss')
    	.pipe(sass({outputStyle:'compressed'})).on('error', sass.logError)
        .pipe(gulp.dest('css'))

    gulp.src('scss/viewUser.scss')
    	.pipe(sass({outputStyle:'compressed'})).on('error', sass.logError)
        .pipe(gulp.dest('css'))
});

//watch changes in the sass
gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
