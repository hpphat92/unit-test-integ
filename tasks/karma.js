'use strict';

module.exports = {
  unit: {
    configFile: './karma.conf.js',
    autoWatch: false,
    singleRun: true
  },
  unit_auto: {
    configFile: './karma.conf.js',
    autoWatch: true,
    singleRun: false
  }
};
