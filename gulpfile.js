// REQUIRED
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var plumber = require('gulp-plumber');
var del = require('del');

var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

// HTML TASKS
// html automatically copied and loaded
gulp.task('html', function(){
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(reload({stream:true}));
});

// SCRIPTS TASK
// transpiles ts to js, minifies, and copies
gulp.task('ts',function(){
    gulp.src(['src/ts/**/*.ts'])
        .pipe(plumber())
        .pipe(ts())
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(reload({stream:true}));
});

// SASS TASKS
// transpiles scss to css, minifies, and copies
gulp.task('sass', function(){
    gulp.src('src/scss/**/*.scss')
        .pipe(plumber())        
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({stream:true}));
});

// BROWSER SYNC TASK
// configure browser-sync
gulp.task('browser-sync', function(){
    browserSync({
        server:{
            baseDir:'./dist/'
        }
    });
});

// WATCH TASKS
// map directories to tasks for browser-sync
gulp.task('watch', function(){
    gulp.watch('src/**/*.ts', ['ts']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/scss/*.scss', ['sass']);
});

// DIST MAINTENANCE
// > gulp build
// > gulp build:remove
gulp.task('build', ['html', 'ts', 'sass']);
gulp.task('build:remove', function(){
    del(['dist/**']);
});

// DEFAULT TASK
// > gulp
gulp.task('default', ['html', 'ts', 'sass', 'browser-sync','watch']);

