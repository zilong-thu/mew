const gulp = require('gulp');
const nodemon = require('gulp-nodemon');


gulp.task('server', (callback) => {
  nodemon({
    script: './server/index.js',
    watch: ['server/', 'config/'],
    ext: 'njk,js',
    ignore: ['node_modules/'],
  }).on('restart', () => {
    console.log('server restarted!');
  });
  callback();
});