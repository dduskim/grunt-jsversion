module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      all: ['test/**/*.js']
    },
    jsversion: {
      dist: {
        namespace: 'global',
        src: 'dist/test.js',
        dest: 'dist/test.v.js'
      }
    },
    watch: {
      files: '<%= lint.files %>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true
      },
      globals: {},
      uses_defaults: ['Gruntfile.js', 'tasks/**/*.js', 'test/**/*.js']
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');
  
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('default', ['jshint', 'jsversion']);
  grunt.registerTask('test', ['jshint', 'nodeunit']);

};
