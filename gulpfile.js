process.env.NODE_ENV = 'development';
const { src, dest, series } = require('gulp');
const color = require('gulp-color');

function copyBuild(cb) {
  console.log (color('copying storybook-static to ...firebase/storybook', 'GREEN'));
  return src('storybook-static/**/*')
          .pipe(dest('firebase/storybook'))
}
exports.copyBuild = copyBuild;
exports.default = series(copyBuild);