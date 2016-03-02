var source = require('vinyl-source-stream');
var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var livereload = require('gulp-livereload');

var scriptsDir = './app';
var buildDir = './server/public';

function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
  this.emit('end'); // Keep gulp from hanging on this task
}

function buildScript(file, watch) {
  var props = {
    entries: [scriptsDir + '/' + file],
    debug: true,
    cache: {},
    packageCache: {},
  };

  var bundler = watch ? watchify(browserify(props)) : browserify(props);
  bundler.transform(babelify, {
    'presets': ['react']
  });

  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', console.log.bind(console))
      .pipe(source(file))
      .pipe(gulp.dest(buildDir + '/'))
      .pipe(livereload({ start: true }));
  }

  bundler.on('update', function () {
    rebundle();
    console.log('rebundle');
  });

  return rebundle();
}

gulp.task('build', function () {
  return buildScript('main.js', false);
});

gulp.task('watch', ['build'], function () {
  return buildScript('main.js', true);
});
