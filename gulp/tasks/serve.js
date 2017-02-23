var gulp = require('gulp'),
  gutil = require('gulp-util'),
  browserSync = require('browser-sync'),
  runSequence = require('run-sequence').use(gulp),
  props = require('../properties.js'),
  join = require('path').join,
  historyApiFallback = require('connect-history-api-fallback');

var url = require('url');

var isAr = props.lang == 'ar';

gulp.task('serve', function() {
  browserSync({
    notify: false,
    open: gutil.env.notab ? false : true,
    port: isAr ? 2500 : 3000,
    ghostMode: false,
    server: {
      baseDir: [props.app + '/' + props.lang],
      directory: gutil.env.dir ? false : true,
      ghostMode: false
    }
  });

  // gulp.start('watch');
  // 'spritesvg',

  runSequence(
    'jade',
    'watch'
  )

  //   runSequence(
  //     'watch'
  //   )

});
