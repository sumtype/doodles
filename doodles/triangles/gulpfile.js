/********************************************************************************
  gulpfile.js
    Gulpfile defining application build task procedures.  Contains procedures for development and production application builds.  Created builds are saved inside the "build" folder of the project root directory.
********************************************************************************/

'use strict';

// Native Node Modules
const path = require('path');

// NPM Modules
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins'), plugins = gulpLoadPlugins();
const webpackStream = require('webpack-stream'), webpack = require('webpack');

// Creates a development JavaScript bundle file using ./app/js/client.js as the entry point.
gulp.task('webpack:dev', () => {
  return gulp.src(path.join(__dirname, 'app', 'js', 'client.js'), { read: true })
    .pipe(webpackStream({
      devtool: 'source-map',
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
      ],
      entry: {
        index: [path.join(__dirname, 'app', 'js', 'client.js')]
      },
      output: {
        filename: 'bundle.js'
      },
      module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  }, webpack))
  .pipe(gulp.dest(path.join(__dirname, 'build', 'js')));
});

// Creates a production JavaScript bundle file using ./app/js/client.js as the entry point.
gulp.task('webpack:pro', () => {
  return gulp.src(path.join(__dirname, 'app', 'js', 'client.js'), { read: true })
    .pipe(webpackStream({
      plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: false,
          compress: {
            warnings: false
          }
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
      ],
      entry: {
        index: [path.join(__dirname, 'app', 'js', 'client.js')]
      },
      output: {
        filename: 'bundle.js'
      },
      module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  }, webpack))
  .pipe(gulp.dest(path.join(__dirname, 'build', 'js')));
});

// Creates development versions of HTML files found among ./app/**/*.html
gulp.task('html:dev', () => {
  return gulp.src(path.join(__dirname, 'app', '**', '*.html'))
    .pipe(gulp.dest(path.join(__dirname, 'build')));
});

// Creates production versions of HTML files found among ./app/**/*.html
gulp.task('html:pro', () => {
  return gulp.src(path.join(__dirname, 'app', '**', '*.html'))
    .pipe(plugins.htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(path.join(__dirname, 'build')));
});

// Creates a development stylesheet file.
gulp.task('css:dev', () => {
  return gulp.src(path.join(__dirname, 'app', 'css', '**', '*.scss'))
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest(path.join(__dirname, 'build', 'css')));
});

// Creates a production stylesheet file.
gulp.task('css:pro', () => {
  var processors = [
    require('postcss-cssnext'),
    require('postcss-font-family'),
    require('postcss-font-magician'),
    require('css-mqpacker'),
    require('csswring'),
    require('cssnano')
  ];
  return gulp.src(path.join(__dirname, 'app', 'css', '**', '*.scss'))
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
    .pipe(gulp.dest(path.join(__dirname, 'build', 'css')));
});

// Copies font files into the build folder.
gulp.task('fonts:all', () => {
  return gulp.src(path.join(__dirname, 'app', 'css', 'fonts', '*'))
    .pipe(gulp.dest(path.join(__dirname, 'build', 'css', 'fonts')));
});

// Wrapper task for creating development builds.
gulp.task('build:dev', ['webpack:dev', 'html:dev', 'fonts:all', 'css:dev']);

// Wrapper task for creating production builds.
gulp.task('build:pro', ['webpack:pro', 'html:pro', 'fonts:all', 'css:pro']);

// Default Gulp task, set to create a development build.
gulp.task('default', ['build:dev']);
