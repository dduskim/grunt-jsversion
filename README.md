# grunt-jsversion

Add package version information.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-jsversion`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-jsversion');
```

[grunt]: http://gruntjs.com/
[getting_started]: https://github.com/gruntjs/grunt/blob/master/docs/getting_started.md

## Documentation
```javascript
grunt.initConfig({
    // ... other configs

    jsversion : {
        dist : {
            namespace   : 'global',             // (optional) window.global.{package.name}.version = {package.version};
            src         : 'dist/test.js',       // (required) source file
            dest        : 'dist/test.v.js'      // (optional) destination file (default : overrite src)
        }  
    }

    // ... other configs
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Kim Du-hyeong  
Licensed under the MIT license.
