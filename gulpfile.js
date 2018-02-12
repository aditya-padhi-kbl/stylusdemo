const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const concatCss = require('gulp-concat-css');
const rename = require('gulp-rename');
const stylus = require('gulp-stylus');
const del = require('del');
const nib = require('nib');

const cssFiles = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
    'node_modules/font-awesome/css/font-awesome.css',
    'app/stylusbuff/**/*.css'
];


/* gulp.task('minify-css', () => {
    
}); */

function minifyCSS() {
    return gulp.src(cssFiles)
        .pipe(concatCss('styles.css'))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'));
}


function compilestylus() {
    return gulp.src('app/stylus/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('app/stylusbuff'));
}

function copyIcons() {
    return gulp.src('node_modules/font-awesome/fonts/**.*')
        .pipe(gulp.dest('font-awesome/fonts'));
}


function clean() {
    return del(['app/stylusbuff']);
}

gulp.task('default', gulp.series(compilestylus, minifyCSS, copyIcons, clean));