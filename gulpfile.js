process.env.NODE_ENV = 'development';
const gulp = require('gulp');
const color = require('gulp-color');
const babel = require('gulp-babel');

gulp.task('default', () => {
  console.log (color('\n babelifying...', 'GREEN'));
//   gulp.start('babelify');
});

gulp.task('watch', () => {
  console.log (color('watching **/*.js', 'GREEN'));
  gulp.watch('./**/*.js', ['babelify']);
});

gulp.task('babelify', () => {
  console.log (color('babelifying...', 'GREEN'));
  gulp.src(['./src/**/*.js'])
      .pipe(babel({
          presets: ['env']
      }))
      .pipe(gulp.dest('dist'))
});
