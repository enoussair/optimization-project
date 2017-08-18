var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imagemin', function(){
  return gulp.src('**/*.{jpg,png}')
          .pipe(imagemin([
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
          ]))
          .pipe(gulp.dest('dist/img'));
});
