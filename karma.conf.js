// Karma configuration
// Generated on Mon Feb 24 2015 16:24:29

module.exports = function (config){
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],
    //frameworks: ['mocha', 'requirejs', 'chai', 'chai-as-promised'],

    files: [

      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      {pattern: 'node_modules/chai/chai.js', included: false, watch: false},
      {pattern: 'node_modules/chai-as-promised/lib/chai-as-promised.js', included: false, watch: false},
      {pattern: 'node_modules/sinon/**/*', included: false, watch: false},
      {pattern: 'node_modules/sinon-chai/lib/sinon-chai.js', included: false, watch: false},
      {pattern: 'test/*.js', included: true},
    ],
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    //logLevel: config.LOG_INFO,
    logLevel: config.LOG_WARN,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS', 'Firefox', 'Chrome'],
    //browsers: ['PhantomJS'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
