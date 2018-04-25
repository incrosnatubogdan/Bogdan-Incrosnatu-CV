var gulp = require('gulp'); 
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
    minifyCSS = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer')

var jsFiles = 'res/**/*.js',
    jsDest = 'res/js';


gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('styles', function(){
    return gulp.src('res/css/*.css')
    .pipe(concat('style.min.css'))
    .pipe(minifyCSS())
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('res/css'))
});