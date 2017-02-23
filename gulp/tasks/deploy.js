var gulp = require('gulp')
var props = require('../properties.js')
var runSequence = require('run-sequence')
var gutil = require('gulp-util')

gulp.task('copyAll', function (done) {
  gutil.log('Copy all soure folder', gutil.colors.magenta(props.langFolder))
  gutil.log('Copy all dist folder', gutil.colors.green(props.distLang))
  return gulp.src([
    '!' + props.langFolder + '/config',
    '!' + props.langFolder + '/pages/**/*',
    '!' + props.langFolder + '/pages',
    '!' + props.langFolder + '/pagelayout/**/*',
    '!' + props.langFolder + '/pagelayout',
    '!' + props.langFolder + '/masterpage/**/*',
    '!' + props.langFolder + '/masterpage',
    '!' + props.langFolder + '/components/**/*',
    '!' + props.langFolder + '/components',
    '!' + props.langFolder + '/styles/scss',
    '!' + props.langFolder + '/styles/**/*.scss',
    '!' + props.langFolder + '/bower_components',
    '!' + props.langFolder + '/scripts/common.js',
    props.langFolder + '/**/'
  ])
    .pipe(gulp.dest(props.distLang))
})

gulp.task('deploy', function (done) {
  runSequence(
    'clean',
    'sprite',
    'spritesvg',
    'jade',
    'scripts',
    'styles',
    'copyAll',
    done)
})
