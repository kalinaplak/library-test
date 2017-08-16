var gulp = require('gulp');

gulp.task('copy-assets', function(){
    return gulp.src(['src/*.scss','src/*/*.scss'], { base: "./src" })
    .pipe(gulp.dest('./dist'))
});