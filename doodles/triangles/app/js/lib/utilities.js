/********************************************************************************
  utilities.js
    Utility functions for simple tasks.
********************************************************************************/

'use strict';

// Returns a random inclusive integer between minimum and maximum values.
exports.getRandomIntInclusive = function(min = 0, max = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Module Export
module.exports = exports;
