/*
 * grunt-jsversion
 * https://github.com/
 *
 * Copyright (c) 2013 Kim Du-hyeong
 * Licensed under the MIT license.
 */

var fs = require("fs");

module.exports = function(grunt) {
  'use strict';

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('jsversion', 'Add package version information', function() {
      
      var condition = [],
          namespace = this.data.namespace || '',
          namespaceArr = [],
          namespaceStr = 'exports',
          packageJson = grunt.file.readJSON('package.json');
      
      if(!packageJson.name) {
          grunt.log.writeln('Package name information not found.');
          return false;
      }
      if(!packageJson.version) {
          grunt.log.writeln('Package version information not found.');
          return false;
      }
      if(namespace !== '') {
          namespaceArr = namespace.split('.');
      }
          
      //namespaceArr.push(packageJson.name);
      
      for(var i=0; i<namespaceArr.length; i++) {
          namespaceStr = namespaceStr + '.' + namespaceArr[i];
          condition.push('    ' + namespaceStr + ' = (typeof ' + namespaceStr + ' === "undefined") ? {} : '+ namespaceStr + ';');
      }
      
      namespaceStr = namespaceStr + '.' + packageJson.name;
      
      var versionScript = '\n(function (exports) {\n' + 
          '    "use strict";\n\n' + 
          '    /* package version info */\n' +
          condition.join('\n') + '\n' +
          '    if(' + namespaceStr + ' !== "undefined") {\n' +
          '        ' + namespaceStr + '.version = "' + packageJson.version + '";\n' +
          '    }\n' +
          '}(window));\n\n';

      var srcFile = grunt.file.read(this.data.src);
      if(srcFile === 'undefined') {
          return false;
      }
      var destFile = [srcFile, versionScript].join('\n');
      var dest = this.data.dest || this.data.src;
      
      grunt.file.write(dest, destFile);
      grunt.log.writeln('Version information was added to ' + dest);
  });
};
