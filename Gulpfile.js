var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var hbsfy = require('hbsfy');
var clean = require('gulp-clean');
var merge = require('merge-stream');


var time_key = (new Date()).getTime();

var config = {
  modeProduction: false,
  source: './src' ,
  destination: './dist',
  inSrc: function(path){
    return this.source+'/'+path;
  },
  inDist: function(path){
    return this.destination+'/'+path;
  }
};




gulp.task('clean-js', function() {
  return gulp.src(config.inDist('assets/js/bundle_*.js'))
    .pipe(clean());
});

gulp.task('clean-html', function() {
  return gulp.src(config.inDist('index.html'))
    .pipe(clean());
});

gulp.task('js', ['clean-html','clean-js'], function() {
  var bundler = browserify({
    entries: config.inSrc('app/index.js'),
    debug: true,
    transform: [hbsfy]
  });
  return bundler
  .bundle()
  .pipe(source('app/index.js'))
  .pipe(buffer())
  .pipe(rename('bundle_'+time_key+'.js'))
  .pipe(gulp.dest(config.inDist('assets/js')));
});

gulp.task('html', function() {
  return gulp.src(config.inSrc('app/index.html'))
    .pipe(replace('bundle.js','bundle_'+time_key+'.js'))
    .pipe(gulp.dest(config.destination));
});


gulp.task('prod',function(){
  config.modeProduction = true;
});


gulp.task('materialize',function() {
  var css = gulp.src(config.inSrc('vendors/materialize-css/css/*.min.css'))
    .pipe(gulp.dest(config.inDist('assets/libs/css')));
  var fonts = gulp.src(config.inSrc('vendors/materialize-css/fonts/roboto/*'))
    .pipe(gulp.dest(config.inDist('assets/libs/fonts/roboto')));
  return merge(css,fonts);
});




gulp.task('default',['js','html','materialize'], function() {
  gulp.watch(config.inSrc('app/**/*.*'),['js','html']);
});

gulp.task('build',['prod','js','html','materialize']);
