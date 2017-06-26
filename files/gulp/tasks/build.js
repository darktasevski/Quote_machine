var gulp = require('gulp'),
browserSync	 = require('browser-sync').create(),
cssNano	 = require('gulp-cssnano'),
usemin 	 = require('gulp-usemin'),
uglify	 = require('gulp-uglify'),
del 	 = require('del'),
rev		 = require('gulp-rev');

gulp.task('previewDist', function(){

	browserSync.init({
		server: {
			baseDir: 'docs',
			index: 'app.html'
		}
	})

});

gulp.task('deleteDist', function(){ // delete dist folder everytime before starting distributing files in it.
	return del('./docs')
});


gulp.task('copyGeneralFiles', ['deleteDist'], function(){
	var pathsToCopy = [
		'./app/**/*',
		'!./app/app.html',
		'!./app/assets/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'
	]
	return gulp.src(pathsToCopy)
		.pipe(gulp.dest('./docs'));
});

gulp.task('useminTrigger', ['deleteDist'], function(){
	gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function(){
	return gulp.src('./app/app.html')
		.pipe(usemin({
			css: [ function(){return rev()}, function(){ return cssNano()}],
			js: [ function(){return rev()}, function(){ return uglify()}]
		}))
		.pipe(gulp.dest('./docs'));
});


gulp.task('build', ['deleteDist', 'copyGeneralFiles', 'useminTrigger'], function(){

})