/********************************************************************************
  client.js
    Contains the p5 setup and draw functions.  Entry point for Webpack.
********************************************************************************/

'use strict';

// NPM Modules
require('p5');
const $ = require('jquery');
require('bootstrap-slider');

// Local Modules
const getRandomIntInclusive = require('./lib/utilities').getRandomIntInclusive;

// Local Variables
let segmentLengthSlider = null;
let weightStrokeSlider = null, redStrokeSlider = null, greenStrokeSlider = null, blueStrokeSlider = null, alphaStrokeSlider = null;
let redFillSlider = null, greenFillSlider = null, blueFillSlider = null, alphaFillSlider = null;
let minSegmentLength = 0, maxSegmentLength = 150;
let minStrokeWeight = 0, maxStrokeWeight = 5, minStrokeRed = 0, maxStrokeRed = 255, minStrokeGreen = 0, maxStrokeGreen = 255, minStrokeBlue = 0, maxStrokeBlue = 255, minStrokeAlpha = 0, maxStrokeAlpha = 255;
let minFillRed = 0, maxFillRed = 255, minFillGreen = 0, maxFillGreen = 255, minFillBlue = 0, maxFillBlue = 255, minFillAlpha = 0, maxFillAlpha = 255;

// Sketch Setup
window.setup = function() {
  var canvas = createCanvas($(window).width(), $(window).height());
  canvas.parent('app');
  background('black');
  $(window).on('resize', function() {
    resizeCanvas($(window).width(), $(window).height());
    background('black');
  });
  $('#segmentLengthValues').text(`  ${minSegmentLength} - ${maxSegmentLength}`);
  $('#weightStrokeValues').text(`  ${minStrokeWeight} - ${maxStrokeWeight}`);
  $('#redStrokeValues').text(`  ${minStrokeRed} - ${maxStrokeRed}`);
  $('#greenStrokeValues').text(`  ${minStrokeGreen} - ${maxStrokeGreen}`);
  $('#blueStrokeValues').text(`  ${minStrokeBlue} - ${maxStrokeBlue}`);
  $('#alphaStrokeValues').text(`  ${minStrokeAlpha} - ${maxStrokeAlpha}`);
  $('#redFillValues').text(`  ${minFillRed} - ${maxFillRed}`);
  $('#greenFillValues').text(`  ${minFillGreen} - ${maxFillGreen}`);
  $('#blueFillValues').text(`  ${minFillBlue} - ${maxFillBlue}`);
  $('#alphaFillValues').text(`  ${minFillAlpha} - ${maxFillAlpha}`);
  segmentLengthSlider = $('#segmentLength').slider({}).on('slide change', function() {
    let values = segmentLengthSlider.getValue();
    $('#segmentLengthValues').text(`  ${values[0]} - ${values[1]}`);
    minSegmentLength = parseInt(values[0]);
    maxSegmentLength = parseInt(values[1]);
  }).data('slider');
  weightStrokeSlider = $('#weightStroke').slider({}).on('slide change', function() {
    let values = weightStrokeSlider.getValue();
    $('#weightStrokeValues').text(`  ${values[0]} - ${values[1]}`);
    minStrokeWeight = parseInt(values[0]);
    maxStrokeWeight = parseInt(values[1]);
  }).data('slider');
  redStrokeSlider = $('#redStroke').slider({}).on('slide change', function() {
    let values = redStrokeSlider.getValue();
    $('#redStrokeValues').text(`  ${values[0]} - ${values[1]}`);
    minStrokeRed = parseInt(values[0]);
    maxStrokeRed = parseInt(values[1]);
  }).data('slider');
  greenStrokeSlider = $('#greenStroke').slider({}).on('slide change', function() {
    let values = greenStrokeSlider.getValue();
    $('#greenStrokeValues').text(`  ${values[0]} - ${values[1]}`);
    minStrokeGreen = parseInt(values[0]);
    maxStrokeGreen = parseInt(values[1]);
  }).data('slider');
  blueStrokeSlider = $('#blueStroke').slider({}).on('slide change', function() {
    let values = blueStrokeSlider.getValue();
    $('#blueStrokeValues').text(`  ${values[0]} - ${values[1]}`);
    minStrokeBlue = parseInt(values[0]);
    maxStrokeBlue = parseInt(values[1]);
  }).data('slider');
  alphaStrokeSlider = $('#alphaStroke').slider({}).on('slide change', function() {
    let values = alphaStrokeSlider.getValue();
    $('#alphaStrokeValues').text(`  ${values[0]} - ${values[1]}`);
    minStrokeAlpha = parseInt(values[0]);
    maxStrokeAlpha = parseInt(values[1]);
  }).data('slider');
  redFillSlider = $('#redFill').slider({}).on('slide change', function() {
    let values = redFillSlider.getValue();
    $('#redFillValues').text(`  ${values[0]} - ${values[1]}`);
    minFillRed = parseInt(values[0]);
    maxFillRed = parseInt(values[1]);
  }).data('slider');
  greenFillSlider = $('#greenFill').slider({}).on('slide change', function() {
    let values = greenFillSlider.getValue();
    $('#greenFillValues').text(`  ${values[0]} - ${values[1]}`);
    minFillGreen = parseInt(values[0]);
    maxFillGreen = parseInt(values[1]);
  }).data('slider');
  blueFillSlider = $('#blueFill').slider({}).on('slide change', function() {
    let values = blueFillSlider.getValue();
    $('#blueFillValues').text(`  ${values[0]} - ${values[1]}`);
    minFillBlue = parseInt(values[0]);
    maxFillBlue = parseInt(values[1]);
  }).data('slider');
  alphaFillSlider = $('#alphaFill').slider({}).on('slide change', function() {
    let values = alphaFillSlider.getValue();
    $('#alphaFillValues').text(`  ${values[0]} - ${values[1]}`);
    minFillAlpha = parseInt(values[0]);
    maxFillAlpha = parseInt(values[1]);
  }).data('slider');
};

// Sketch Drawing
window.draw = function() {
  strokeWeight(getRandomIntInclusive(minStrokeWeight, maxStrokeWeight));
  stroke(getRandomIntInclusive(minStrokeRed, maxStrokeRed), getRandomIntInclusive(minStrokeGreen, maxStrokeGreen), getRandomIntInclusive(minStrokeBlue, maxStrokeBlue), getRandomIntInclusive(minStrokeAlpha, maxStrokeAlpha));
  fill(getRandomIntInclusive(minFillRed, maxFillRed), getRandomIntInclusive(minFillGreen, maxFillGreen), getRandomIntInclusive(minFillBlue, maxFillBlue), getRandomIntInclusive(minFillAlpha, maxFillAlpha));
  let width = $(window).width();
  let height = $(window).height();
  // Set Triangle X Values
  let x1 = getRandomIntInclusive(0 - maxSegmentLength, width + maxSegmentLength);
  let x2Min = x1 - minSegmentLength, x2Max = x1 - maxSegmentLength;
  let x3Min = x1 + minSegmentLength, x3Max = x1 + maxSegmentLength;
  let x2 = getRandomIntInclusive(x2Min, x2Max);
  let x3 = getRandomIntInclusive(x3Min, x3Max);
  // Set Y Values
  let y1 = getRandomIntInclusive(0 - maxSegmentLength, height + maxSegmentLength);
  let yMin = y1 + minSegmentLength, yMax = y1 + maxSegmentLength;
  let y2 = getRandomIntInclusive(yMin, yMax);
  let y3 = getRandomIntInclusive(yMin, yMax);
  triangle(x1, y1, x2, y2, x3, y3);
};
