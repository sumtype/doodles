/********************************************************************************
  production.js
    Defines application build task functions for import into the gulpfile.js.  Contains procedures which are used to perform production builds.
********************************************************************************/

'use strict';

// Native Node Modules
const path = require('path');

// NPM Modules
const webpackStream = require('webpack-stream'), wp = require('webpack');

//Local Variables
const projectRoot = path.join(__dirname, '..');

// Creates a production JavaScript bundle file using ./app/js/client.js as the entry point.
const webpack = (gulp) => {
  return () => {
    return gulp.src(path.join(projectRoot, 'app', 'js', 'client.js'), { read: true })
      .pipe(webpackStream({
        plugins: [
          new wp.optimize.DedupePlugin(),
          new wp.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
              warnings: false
            }
          }),
          new wp.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          })
        ],
        entry: {
          index: [path.join(projectRoot, 'app', 'js', 'client.js')]
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
    }, wp))
    .pipe(gulp.dest(path.join(projectRoot, 'build', 'js')));
  };
};
exports.webpack = webpack;

// Creates production versions of HTML files found among ./app/**/*.html
const html = (gulp, plugins) => {
  return () => {
    return gulp.src(path.join(projectRoot, 'app', '**', '*.html'))
      .pipe(plugins.htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest(path.join(projectRoot, 'build')));
  };
};
exports.html = html;

// Creates a production stylesheet file.
const css = (gulp, plugins) => {
  return () => {
    var processors = [
      require('postcss-cssnext'),
      require('postcss-font-family'),
      require('postcss-font-magician'),
      require('css-mqpacker'),
      require('csswring'),
      require('cssnano')
    ];
    return gulp.src(path.join(projectRoot, 'app', 'css', '**', '*.scss'))
      .pipe(plugins.sass().on('error', plugins.sass.logError))
      .pipe(plugins.postcss(processors))
      .pipe(gulp.dest(path.join(projectRoot, 'build', 'css')));
  };
};
exports.css = css;

//Copies production images (compressed) into the build folder.
const images = (gulp, plugins) => {
  return () => {
    return gulp.src(path.join(projectRoot, 'app', 'images', '*'))
      .pipe(plugins.imagemin())
      .pipe(gulp.dest(path.join(projectRoot, 'build', 'images')));
  };
};
exports.images = images;

// Module Export
module.exports = exports;
