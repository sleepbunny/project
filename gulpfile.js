const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  cssnano = require('gulp-clean-css'),
	  rename = require('gulp-rename');
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		imagemin = require('gulp-imagemin');
gulp.task('css',()=>{
	return gulp.src('./src/sass/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		//.pipe(cssnano())
		.pipe(rename({'suffix' : '.min'}))
		.pipe(gulp.dest('./dist/css'));
})
gulp.task('js',()=>{
	return gulp.src('./src/js/*.js')
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./distjs'))
})
gulp.task('img',()=>{
	return gulp.src('./src/img*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/img'));
})
gulp.task('default',()=>{
	gulp.watch('./src/sass/*.scss',['css']);
	gulp.watch('./src/js/*.js',['js']);
	gulp.watch('./src/img/*',['img']);
})