'use strict';

module.exports = function(grunt){
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var options = {
    config: {
      src: 'tasks/*.js'
    },
	path: ''
  };

  // Load grunt configurations automatically
  var configs = require('load-grunt-configs')(grunt, options);

  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  //single run tests
  grunt.registerTask('test', ['test:unit']);
  grunt.registerTask('test:unit', ['karma:unit']);

  //autotest and watch tests
  grunt.registerTask('autotest', ['karma:unit_auto']);
  grunt.registerTask('autotest:unit', ['karma:unit_auto']);
};