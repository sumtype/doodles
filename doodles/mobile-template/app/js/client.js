/********************************************************************************
  client.js
    Contains the p5 setup and draw functions.  Entry point for Webpack.
********************************************************************************/

'use strict';

// NPM Modules
require('p5');
const $ = require('jquery');

// Local Modules
const getRandomIntInclusive = require('./lib/utilities').getRandomIntInclusive;

// Sketch Setup
window.setup = function() {
  var canvas = createCanvas($(window).width(), $(window).height());
  canvas.parent('app');
  background('black');
  $(window).on('resize', function() {
    resizeCanvas($(window).width(), $(window).height());
    background('black');
  });
};

// Sketch Drawing
window.draw = function() {
  stroke(255, 255, 255, getRandomIntInclusive(0, 255));
  line(getRandomIntInclusive(0, $(window).width()), getRandomIntInclusive(0, $(window).height()), getRandomIntInclusive(0, $(window).width()), getRandomIntInclusive(0, $(window).height()));
};
