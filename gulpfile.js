var source = require('vinyl-source-stream');
var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var path = require('path');

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
      .pipe(livereload({
        start: true
      }));
  }

  bundler.on('update', function() {
    rebundle();
    console.log('rebundle');
  });

  return rebundle();
}

gulp.task('less', function() {
  return gulp.src('app/style/app.less')
    .pipe(less({
      paths: [path.join(__dirname, 'node_modules/purecss/build/')]
    }))
    .pipe(gulp.dest(buildDir + '/'));
});

gulp.task('build', function() {
  return buildScript('main.js', false);
});

gulp.task('watch', ['build'], function() {
  return buildScript('main.js', true);
});
