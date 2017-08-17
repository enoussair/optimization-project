var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin', function(){
  return gulp.src('img/*')
          .pipe(imagemin())
          .pipe(gulp.dest('dist/img'));
});
