var gulp        = require('gulp');
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  gulp.watch("./scss/**/*.scss", ['sass']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("./scss/*.scss")
  .pipe(sass())
    .pipe(sass({
      errLogToConsole: true
    }))
  .pipe(autoprefixer())
  .pipe(gulp.dest("./css"))
});

gulp.task('default', ['serve']);
